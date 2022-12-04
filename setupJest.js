global.fetch = require("jest-mock-fetch");
jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    url: process.env.NEXT_PUBLIC_ANIME_API ?? "https://api.jikan.moe/v4/anime",
  },
}));

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));
