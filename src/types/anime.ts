export type Image = {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
};

export type Images = {
  jpg: Image;
  webp: Image;
};

export type Trailer = {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
};

export type Title = {
  type: string;
  title: string;
};

export type Date = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export type DateProp = {
  from: Date;
  to: Date;
  string: string;
};

export type DateRange = {
  from: string | null;
  to: string | null;
  prop: DateProp;
};

export type Broadcast = {
  day: string | null;
  time: string | null;
  timeZone: string | null;
  string: string;
};

export type MalURL = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Anime = {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string;
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: DateRange;
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: Broadcast;
  producers: MalURL[];
  licensors: MalURL[];
  studios: MalURL[];
  genres: MalURL[];
  explicit_genres: MalURL[];
  themes: MalURL[];
  demographics: MalURL[];
};
