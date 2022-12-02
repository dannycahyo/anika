export const getAnimeById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME_API}/${id}`);
  const data = await res.json();
  return data;
};
