export const getAnimeList = async (page: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
  const data = await res.json();
  return data;
};
