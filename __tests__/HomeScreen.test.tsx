import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import { server } from "../src/mocks/server";
import { rest } from "msw";
import { animeList } from "../__mocks__/data/animesList";
import "@testing-library/jest-dom";
import HomeScreen from "@home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "jest-fetch-mock";
import getConfig from "next/config";
const config = getConfig();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Loads and display Home Screen", () => {
  const queryClient = new QueryClient();
  it("Render the content", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen page="1" />
      </QueryClientProvider>
    );

    await waitForElementToBeRemoved(screen.queryByText("Loading..."), {
      timeout: 10000,
    });

    const animesListHeading = screen.getByRole("heading", {
      name: "Anime List",
    });

    expect(animesListHeading).toBeInTheDocument();

    animeList.data.forEach((anime) => {
      const animeName = screen.getByRole("heading", {
        name: anime.title,
      });

      expect(animeName).toBeInTheDocument();
    });
  });

  it("handles server error", async () => {
    server.use(
      rest.get(`${config.publicRuntimeConfig.url}?page=1`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen page="1" />
      </QueryClientProvider>
    );

    const [errorTitleText, errorDescText] = [
      "Upps, Error",
      "There is something wrong with our system. Try Again Later",
    ];

    const errorTitle = screen.findByText(errorTitleText);
    const errorDescription = screen.findByText(errorDescText);

    await waitFor(() => errorTitle);
    await waitFor(() => errorDescription);

    expect(screen.getByText(errorTitleText)).toBeInTheDocument();
    expect(screen.getByText(errorDescText)).toBeInTheDocument();
  });
});
