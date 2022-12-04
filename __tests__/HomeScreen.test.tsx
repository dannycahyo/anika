import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeScreen from "@home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { animesListTitle } from "../__mocks__/data/animesListTitle";
import "jest-fetch-mock";

describe("Loads and display Home Screen", () => {
  it("Render the content", async () => {
    const queryClient = new QueryClient();

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

    animesListTitle.forEach((animeTitle) => {
      const animeName = screen.getByRole("heading", {
        name: animeTitle,
      });

      expect(animeName).toBeInTheDocument();
    });
  });
});
