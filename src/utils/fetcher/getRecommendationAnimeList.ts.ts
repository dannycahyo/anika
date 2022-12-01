export const getRecommendationAnimeList = async (score: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?score=${score}`);
  const data = await res.json();
  return data;
};
