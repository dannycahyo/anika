import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "../__mocks__/intersectionObserverMock";
import { server } from "../src/mocks/server";
import AnimeDetailRecommendation from "@animeDetail/AnimeDetail__Recommendation";
import { animesRecommendedList } from "../__mocks__/data/animesRecommendedList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "jest-fetch-mock";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Loads and display Anime Detail Recommendation", () => {
  it("renders the content", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <AnimeDetailRecommendation />
      </QueryClientProvider>
    );

    const recommendedAnimeTitle = screen.getByRole("heading", {
      name: "Recommended Anime",
    });

    expect(recommendedAnimeTitle).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.queryByText("Loading Recommended Anime..."),
      {
        timeout: 10000,
      }
    );

    animesRecommendedList.data.forEach((anime) => {
      const animeName = screen.getByRole("heading", {
        name: anime.title,
      });

      expect(animeName).toBeInTheDocument();
    });
  });
});
