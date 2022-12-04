import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "../__mocks__/intersectionObserverMock";
import AnimeDetailInfo from "@animeDetail/AnimeDetail__DetailInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { animeDetail } from "../__mocks__/data/animeDetail";
import "jest-fetch-mock";

describe("Loads and display Anime Detail Info", () => {
  it("renders the content", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <AnimeDetailInfo id="21" />
      </QueryClientProvider>
    );

    const backButton = screen.getByRole("heading", {
      name: "Back",
    });

    expect(backButton).toBeInTheDocument();

    const animeDetailTitle = screen.getByRole("heading", {
      name: "Anime Detail",
    });

    expect(animeDetailTitle).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.queryByText("Loading Anime Detail..."),
      {
        timeout: 10000,
      }
    );

    const animeTitle = screen.getByRole("heading", {
      name: animeDetail.title,
    });

    expect(animeTitle).toBeInTheDocument();

    const animeScore = screen.getByRole("heading", {
      name: `${animeDetail.score}`,
    });

    expect(animeScore).toBeInTheDocument();

    const animeYear = screen.getByRole("heading", {
      name: `${animeDetail.year}`,
    });

    expect(animeYear).toBeInTheDocument();

    const animeSynopsis = screen.getByText(animeDetail.synopsis);

    expect(animeSynopsis).toBeInTheDocument();
  });
});
