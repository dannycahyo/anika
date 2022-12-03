import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouriteScreen from "@favourite/FavouriteScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Loads and display Favourite Screen", () => {
  const queryClient = new QueryClient();
  it("renders favourite screen", async () => {
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

    const loadingText = screen.getByRole("heading", {
      name: "Loading...",
    });

    expect(loadingText).toBeInTheDocument();
  });
});
