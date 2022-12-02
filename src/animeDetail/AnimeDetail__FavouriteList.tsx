import { Grid, Box, Typography, Button } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { Anime } from "src/types/anime";
import Image from "next/image";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import useFavouriteAnimeStore from "@hooks/useFavouriteAnimeStore";

namespace Caption {
  export const favAnimeListTitle = "Favourite Anime List";
  export const addToFavourites = "Add to Favourites";
  export const removeFromFavourites = "Remove from Favourites";
  export const emptyAnime = "There's no anime added yet";
}

type Props = {
  anime: Anime;
};

function FavouriteList({ anime }: Props) {
  const { animes, addAnime, removeAnime } = useFavouriteAnimeStore((state) => ({
    animes: state.animes,
    addAnime: state.addAnime,
    removeAnime: state.removeAnime,
  }));

  const isEmptyAnimes = animes.length === 0;

  return (
    <Box sx={{ pb: 4, pl: 4 }}>
      <Typography variant="h5">{Caption.favAnimeListTitle}</Typography>
      <Grid sx={{ pt: 2 }} container spacing={2}>
        {isEmptyAnimes ? (
          <Box sx={{ pt: 4 }}>
            <Image
              alt="empty anime"
              src="/Empty.svg"
              width={300}
              height={300}
            />
            <Typography variant="h6" sx={{ ml: 2 }}>
              {Caption.emptyAnime}
            </Typography>
          </Box>
        ) : (
          <Grid item width="300px" height="400px" columns={4}>
            {animes.map(({ title, score, images, mal_id }) => (
              <Box key={title}>
                <Link href={`/detail/${mal_id}`}>
                  <AnimeCard
                    title={title}
                    score={score ?? 0}
                    imageUrl={images.jpg.image_url ?? ""}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        {isEmptyAnimes ? (
          <Button
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={() => addAnime(anime)}
          >
            {Caption.addToFavourites}
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<RemoveCircleIcon />}
            onClick={() => removeAnime()}
          >
            {Caption.removeFromFavourites}
          </Button>
        )}
        ,
      </Grid>
    </Box>
  );
}

export default FavouriteList;
