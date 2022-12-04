import { rest } from "msw";
import { animeDetail } from "../../__mocks__/data/animeDetail";
import getConfig from "next/config";
const config = getConfig();

export const handlers = [
  rest.get(`${config.publicRuntimeConfig.url}/21`, (_, res, ctx) => {
    return res(ctx.json({ data: animeDetail }));
  }),
];
