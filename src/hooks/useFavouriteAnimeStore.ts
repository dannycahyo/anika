import { AnimeCard } from "src/types/animeCard";
import create from "zustand";
import { favAnimes } from "../../__mocks__/data/favouriteAnimes";

type State = {
  animes: AnimeCard[];
};

type Action = {
  addAnime: (anime: AnimeCard) => void;
  removeAnime: (animeId: string) => void;
};

namespace StoreFunction {
  export const addAnime = (
    animes: AnimeCard[],
    anime: AnimeCard
  ): AnimeCard[] => {
    const newAnimes = [...animes];
    newAnimes.push(anime);
    return newAnimes;
  };

  export const removeAnime = (
    currentAnimes: AnimeCard[],
    animeId: string
  ): AnimeCard[] => {
    return currentAnimes.filter((anime) => `${anime.mal_id}` !== animeId);
  };
}

const useFavouriteAnimeStore = create<State & Action>((set) => ({
  animes: favAnimes,
  addAnime: (anime: AnimeCard) =>
    set((state) => ({
      ...state,
      animes: StoreFunction.addAnime(state.animes, anime),
    })),
  removeAnime: (animeId) =>
    set((state) => ({
      ...state,
      animes: StoreFunction.removeAnime(state.animes, animeId),
    })),
}));

export default useFavouriteAnimeStore;
