import { rest } from "msw";
import { AnimeDetail } from "src/types/animeDetail";
import { AnimeList } from "src/types/animeList";
import { animeDetail } from "../../__mocks__/data/animeDetail";
import { animeList } from "../../__mocks__/data/animesList";
import getConfig from "next/config";
const config = getConfig();

type AnimeDetailData = {
  data: AnimeDetail;
};

export const handlers = [
  rest.get(`${config.publicRuntimeConfig.url}/21`, (_, res, ctx) => {
    return res(ctx.json<AnimeDetailData>({ data: animeDetail }));
  }),

  rest.get(`${config.publicRuntimeConfig.url}?page=1`, (_, res, ctx) => {
    return res(ctx.json<AnimeList>(animeList));
  }),
];
