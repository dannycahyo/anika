import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Container, Typography, IconButton, Box } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getRecommendationAnimeList } from "@utils/fetcher/getRecommendationAnimeList.ts";
import { Anime } from "src/types/anime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Data = {
  data: Anime[];
};

namespace Contanst {
  export const animeScore = 9;
}

namespace Caption {
  export const animeRecommendation = "Recommended Anime";
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <IconButton
      disabled={isFirstItemVisible}
      aria-label="back-button"
      color="primary"
      onClick={() => scrollPrev()}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <IconButton
      disabled={isLastItemVisible}
      aria-label="back-button"
      color="primary"
      onClick={() => scrollNext()}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function Recommendation() {
  const { data } = useQuery<Data>({
    queryKey: ["recommendationAnime"],
    queryFn: () => getRecommendationAnimeList(Contanst.animeScore),
  });
  const animes = data?.data ?? [];

  return (
    <Container maxWidth="lg" sx={{ pb: 4 }}>
      <Typography sx={{ mt: 1, mb: 2, ml: 4 }} variant="h5">
        {Caption.animeRecommendation}
      </Typography>
      <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
        {animes.map(({ title, score, images, mal_id }) => (
          <Box key={mal_id} width="300px" height="400px" sx={{ mx: 1 }}>
            <AnimeCard
              title={title}
              score={score ?? 0}
              imageUrl={images.jpg.image_url ?? ""}
            />
          </Box>
        ))}
      </ScrollMenu>
    </Container>
  );
}

export default Recommendation;
