import { Grid } from "@mui/material";
import AnimeLoadingCard from "@uikit/card/AnimeLoadingCard";

function AnimeListLoading() {
  const dummyData = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <Grid
      sx={{ pt: 2 }}
      container
      spacing={4}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {dummyData.map((_, i) => (
        <Grid item xs={4} sm={4} md={3} key={i}>
          <AnimeLoadingCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default AnimeListLoading;
