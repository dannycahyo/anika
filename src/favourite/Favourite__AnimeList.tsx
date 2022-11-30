import { Grid, Box, Typography, Stack } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { Anime } from "src/types/anime";
import Link from "next/link";

namespace Caption {
  export const favAnimeListTitle = "Favourite Anime List";
  export const favAnimeListDesc = "These are some of your favorites animes";
}

type Props = {
  animes: Anime[];
};

function AnimeList({ animes }: Props) {
  return (
    <Box sx={{ pb: 4 }}>
      <Stack spacing={2}>
        <Typography sx={{ mt: 3 }} variant="h5">
          {Caption.favAnimeListTitle}
        </Typography>
        <Typography variant="body1">{Caption.favAnimeListDesc}</Typography>
      </Stack>
      <Grid
        sx={{ pt: 2 }}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
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
