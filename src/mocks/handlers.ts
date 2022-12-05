import { rest } from "msw";
import { AnimeDetail } from "src/types/animeDetail";
import { AnimeList } from "src/types/animeList";
import { AnimesRecommended } from "src/types/animesRecommended";
import { animeDetail } from "../../__mocks__/data/animeDetail";
import { animeList } from "../../__mocks__/data/animesList";
import { animesRecommendedList } from "../../__mocks__/data/animesRecommendedList";
import getConfig from "next/config";
const config = getConfig();

type AnimeDetailData = {
  data: AnimeDetail;
};

export const handlers = [
  rest.get(`${config.publicRuntimeConfig.url}/:animeId`, (_, res, ctx) => {
    return res(ctx.json<AnimeDetailData>({ data: animeDetail }));
  }),

  rest.get(`${config.publicRuntimeConfig.url}`, (req, res, ctx) => {
    const isPageQueryParams = req.url.searchParams.has("page");
    const isScoreQueryParams = req.url.searchParams.has("score");

    if (isPageQueryParams) {
      return res(ctx.json<AnimeList>(animeList));
    } else if (isScoreQueryParams) {
      return res(ctx.json<AnimesRecommended>(animesRecommendedList));
    }
  }),
];
