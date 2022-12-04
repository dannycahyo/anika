import getConfig from "next/config";
const config = getConfig();

export const getAnimeById = async (id: string) => {
  try {
    const res = await fetch(`${config.publicRuntimeConfig.url}/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
