import create from "zustand";
import { Anime } from "../types/anime";

type State = {
  animes: Anime[];
};

type Action = {
  addAnime: (anime: Anime) => void;
  removeAnime: () => void;
};

namespace StoreFunction {
  export const addAnime = (animes: Anime[], anime: Anime): Anime[] => {
    const newAnimes = [...animes];
    newAnimes.push(anime);
    return newAnimes;
  };

  export const removeAnime = (animes: Anime[]): Anime[] => {
    const newAnimes = [...animes];
    newAnimes.pop();
    return newAnimes;
  };
}

const useFavouriteAnimeStore = create<State & Action>((set) => ({
  animes: [],
  status: "idle",
  addAnime: (anime: Anime) =>
    set((state) => ({
      ...state,
      animes: StoreFunction.addAnime(state.animes, anime),
    })),
  removeAnime: () =>
    set((state) => ({
      ...state,
      animes: StoreFunction.removeAnime(state.animes),
    })),
}));

export default useFavouriteAnimeStore;
