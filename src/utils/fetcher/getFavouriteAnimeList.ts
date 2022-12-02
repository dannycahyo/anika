export const getFavouriteAnimeList = async (limit: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_API}?limit=${limit}`
  );
  const data = await res.json();
  return data;
};
