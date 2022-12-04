import getConfig from "next/config";
const config = getConfig();

export const getAnimeList = async (page: number) => {
  try {
    const res = await fetch(`${config.publicRuntimeConfig.url}?page=${page}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
