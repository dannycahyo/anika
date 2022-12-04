import { AnimeCard } from "src/types/animeCard";
import { Pagination } from "src/types/pagination";

export type AnimeList = {
  data: AnimeCard[];
  pagination: Pagination;
};
