import getConfig from "next/config";
const config = getConfig();

export const getFavouriteAnimeList = async (limit: number) => {
  try {
    const res = await fetch(`${config.publicRuntimeConfig.url}?limit=${limit}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
