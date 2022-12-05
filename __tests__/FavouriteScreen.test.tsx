import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { favAnimes } from "../__mocks__/data/favouriteAnimes";
import FavouriteScreen from "@favourite/FavouriteScreen";

describe("Display Favourite Screen", () => {
  it("renders the content", () => {
    render(<FavouriteScreen />);

    const favAnimeListTitle = screen.getByRole("heading", {
      name: "Favourite Anime List",
    });

    expect(favAnimeListTitle).toBeInTheDocument();

    const favAnimesListDesc = screen.getByText(
      "These are some of your favorites animes"
    );

    expect(favAnimesListDesc).toBeInTheDocument();

    const favAnimeDefaultValue = favAnimes[0];

    const favAnimeTitle = screen.getByRole("heading", {
      name: favAnimeDefaultValue.title,
    });

    expect(favAnimeTitle).toBeInTheDocument();

    const favAnimeDesc = screen.getByText(
      `${favAnimeDefaultValue.score} Score`
    );

    expect(favAnimeDesc).toBeInTheDocument();
  });
});
