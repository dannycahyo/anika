import { Grid, Box, Typography } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { Anime } from "src/types/anime";
import Link from "next/link";

namespace Caption {
  export const animeList = "Anime List";
}

type Props = {
  animes: Anime[];
};

function AnimeList({ animes }: Props) {
  return (
    <Box>
      <Typography sx={{ mt: 3 }} variant="h5">
        {Caption.animeList}
      </Typography>
      <Grid
        sx={{ pt: 2 }}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {animes.map(({ title, score, images, mal_id }) => (
          <Grid item xs={4} sm={4} md={3} key={title}>
            <Link href={`/detail/${mal_id}`}>
              <AnimeCard
                title={title}
                score={score ?? 0}
                imageUrl={images.jpg.image_url ?? ""}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AnimeList;
