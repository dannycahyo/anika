import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { favAnimes } from "../__mocks__/data/favouriteAnimes";
import AnimeDetailFavourite from "@animeDetail/AnimeDetail__Favourite";

describe("Test Favourite Button Interactivity", () => {
  it("renders the content", async () => {
    render(<AnimeDetailFavourite anime={favAnimes[0]} />);

    const removeFromFavourites = screen.getByRole("button", {
      name: "Remove from Favourites",
    });

    await userEvent.click(removeFromFavourites);

    await screen.findByRole("button", {
      name: "Add to Favourites",
    });

    expect(screen.getByRole("button")).toHaveTextContent("Add to Favourites");
    expect(screen.getByRole("button")).not.toHaveTextContent(
      "Remove from Favourites"
    );

    screen.debug(undefined, 3000);
  });
});
