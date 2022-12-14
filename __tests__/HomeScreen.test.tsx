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
        <HomeScreen page={1} />
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

  // TODO: Handle case when the server response error
});
