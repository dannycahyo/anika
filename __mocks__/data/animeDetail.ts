import { AnimeDetail } from "src/types/animeDetail";

export const animeDetail: AnimeDetail = {
  title: "One Piece",
  year: 1999,
  score: 8.68,
  synopsis:
    'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]',
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/73245t.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/73245.webp",
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/73245t.webp",
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/73245l.webp",
    },
  },
  trailer: {
    youtube_id: "l_98K4_6UQ0",
    url: "https://www.youtube.com/watch?v=l_98K4_6UQ0",
    embed_url:
      "https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1",
  },
  genres: [
    {
      mal_id: 1,
      type: "anime",
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
    },
    {
      mal_id: 2,
      type: "anime",
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure",
    },
    {
      mal_id: 10,
      type: "anime",
      name: "Fantasy",
      url: "https://myanimelist.net/anime/genre/10/Fantasy",
    },
  ],
  licensors: [
    {
      mal_id: 102,
      type: "anime",
      name: "Funimation",
      url: "https://myanimelist.net/anime/producer/102/Funimation",
    },
    {
      mal_id: 252,
      type: "anime",
      name: "4Kids Entertainment",
      url: "https://myanimelist.net/anime/producer/252/4Kids_Entertainment",
    },
  ],
};
