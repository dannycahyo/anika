import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import HomeScreen from "@home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Loads and display Home Screen", () => {
  const queryClient = new QueryClient();
  it("renders home screen", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen page="1" />
      </QueryClientProvider>
    );

    const loadingText = screen.getByRole("heading", {
      name: "Loading...",
    });

    expect(loadingText).toBeInTheDocument();

    const heading = screen.getByRole("heading", {
      name: "Anime List",
    });

    expect(heading).toBeInTheDocument();
  });
});
