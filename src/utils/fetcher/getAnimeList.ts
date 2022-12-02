export const getAnimeList = async (page: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME_API}?page=${page}`);
  const data = await res.json();
  return data;
};
