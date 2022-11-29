import { Grid, Box, Typography } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";

function MovieList() {
  const mockDatas = [
    {
      title: "Jujitsu Kaisen",
      score: 8,
    },
    {
      title: "Spy X Family",
      score: 8,
    },
    {
      title: "Attack On Titan",
      score: 8,
    },
    {
      title: "One Piece",
      score: 8,
    },
    {
      title: "Demon Slayer",
      score: 8,
    },
    {
      title: "Naruto",
      score: 8,
    },
  ];

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
        {mockDatas.map(({ title, score }) => (
          <Grid item xs={4} sm={4} md={3} key={title}>
            <AnimeCard title={title} score={score} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieList;
