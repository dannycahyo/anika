import { Grid, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import useFavouriteAnimeStore from "@hooks/useFavouriteAnimeStore";
import { AnimeCard } from "src/types/animeCard";

namespace Caption {
  export const addToFavourites = "Add to Favourites";
  export const removeFromFavourites = "Remove from Favourites";
}

type Props = {
  anime: AnimeCard;
};

function FavouriteList({ anime }: Props) {
  const { animes, addAnime, removeAnime } = useFavouriteAnimeStore((state) => ({
    animes: state.animes,
    addAnime: state.addAnime,
    removeAnime: state.removeAnime,
  }));

  const isAnimeAlreadyAdded = animes.some(
    (animeDetail) => `${animeDetail.mal_id}` === `${anime.mal_id}`
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ pt: 2, pb: 4, pl: 4 }}
    >
      {isAnimeAlreadyAdded ? (
        <Button
          variant="contained"
          color="error"
          startIcon={<RemoveCircleIcon />}
          onClick={() => removeAnime(`${anime.mal_id}`)}
        >
          {Caption.removeFromFavourites}
        </Button>
      ) : (
        <Button
          variant="contained"
          startIcon={<FavoriteIcon />}
          onClick={() => addAnime(anime)}
        >
          {Caption.addToFavourites}
        </Button>
      )}
    </Grid>
  );
}

export default FavouriteList;
