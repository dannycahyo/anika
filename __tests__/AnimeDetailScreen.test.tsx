import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "../__mocks__/intersectionObserverMock";
import AnimeDetailScreen from "@animeDetail/AnimeDetailScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Loads and display Anime Detail Screen", () => {
  const queryClient = new QueryClient();
  it("renders anime detail screen", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AnimeDetailScreen id="1" />
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

    const recommendedAnimeTitle = screen.getByRole("heading", {
      name: "Recommended Anime",
    });

    expect(recommendedAnimeTitle).toBeInTheDocument();

    const favouriteAnimeListTitle = screen.getByRole("heading", {
      name: "Favourite Anime List",
    });

    expect(favouriteAnimeListTitle).toBeInTheDocument();

    const emptyAnimeListDescription = screen.getByRole("heading", {
      name: "There's no anime added yet",
    });

    expect(emptyAnimeListDescription).toBeInTheDocument();

    const addToFavouritesButton = screen.getByRole("button", {
      name: "Add to Favourites",
    });

    expect(addToFavouritesButton).toBeInTheDocument();
  });
});
