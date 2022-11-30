export const getFavouriteAnimeList = async (limit: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?limit=${limit}`);
  const data = await res.json();
  return data;
};
