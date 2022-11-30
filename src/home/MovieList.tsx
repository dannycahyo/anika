import { Grid, Box, Typography } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { Anime } from "src/types/anime";

type Props = {
  animes: Anime[];
};

function MovieList({ animes }: Props) {
  return (
    <Box>
      <Typography sx={{ mt: 3 }} variant="h5">
        Anime List
      </Typography>
      <Grid
        sx={{ pt: 2 }}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {animes.map(({ title, score, images }) => (
          <Grid item xs={4} sm={4} md={3} key={title}>
            <AnimeCard
              title={title}
              score={score ?? 0}
              imageUrl={images.jpg.image_url ?? ""}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieList;
