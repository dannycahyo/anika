import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouriteScreen from "@favourite/FavouriteScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { animesFavouriteListTitle } from "../__mocks__/data/animesFavouriteListTitle";
import "jest-fetch-mock";

describe("Loads and display Favourite Screen", () => {
  it("Render the content", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FavouriteScreen />
      </QueryClientProvider>
    );

    const favouriteAnimeListTitle = screen.getByRole("heading", {
      name: "Favourite Anime List",
    });

    expect(favouriteAnimeListTitle).toBeInTheDocument();

    const favouriteAnimeListDescription = screen.getByText(
      "These are some of your favorites animes"
    );

    expect(favouriteAnimeListDescription).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.queryByText("Loading..."), {
      timeout: 10000,
    });

    animesFavouriteListTitle.forEach((animeTitle) => {
      const animeName = screen.getByRole("heading", {
        name: animeTitle,
      });

      expect(animeName).toBeInTheDocument();
    });
  });
});
