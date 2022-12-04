import { Images } from "./anime";

export type AnimeCard = {
  title: string;
  score: number | null;
  images: Images;
  mal_id: number;
};
