export const getAnimeById = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await res.json();
  return data;
};
