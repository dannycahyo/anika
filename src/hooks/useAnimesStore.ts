import create from "zustand";
import { Anime } from "../types/anime";
import { Pagination } from "../types/pagination";

type State = {
  animes: Anime[];
  page: number;
  pagination: Pagination;
};

type Action = {
  updateAnimes: (animes: Anime[]) => void;
  updatePagination: (pagination: Pagination) => void;
  updatePage: (page: number) => void;
};

const useAnimeStore = create<State & Action>((set, get) => ({
  animes: [],
  page: 1,
  pagination: {
    has_next_page: false,
    current_page: 0,
    last_visible_page: 10,
    items: {
      count: 0,
      per_page: 0,
      total: 0,
    },
  },
  updateAnimes: (newAnimes: Anime[]) => {
    if (get().animes !== newAnimes) {
      set((state) => ({ ...state, animes: newAnimes }));
    }
  },
  updatePagination: (newPaginations: Pagination) => {
    if (get().pagination !== newPaginations) {
      set((state) => ({ ...state, paginations: newPaginations }));
    }
  },
  updatePage: (newPage: number) => {
    if (get().page !== newPage) {
      set((state) => ({ ...state, page: newPage }));
    }
  },
}));

export default useAnimeStore;
