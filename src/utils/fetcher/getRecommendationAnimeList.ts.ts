export const getRecommendationAnimeList = async (score: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_API}?score=${score}`
  );
  const data = await res.json();
  return data;
};
