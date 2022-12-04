import { Trailer, Images, MalURL } from "./anime";

export type AnimeDetail = {
  title: string;
  year: number | null;
  score: number | null;
  synopsis: string | null;
  trailer: Trailer;
  images: Images;
  genres: MalURL[];
  licensors: MalURL[];
};
