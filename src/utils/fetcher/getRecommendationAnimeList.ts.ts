import getConfig from "next/config";
const config = getConfig();

export const getRecommendationAnimeList = async (score: number) => {
  try {
    const res = await fetch(`${config.publicRuntimeConfig.url}?score=${score}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
