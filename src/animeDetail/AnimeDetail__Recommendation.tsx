import React from "react";
import Link from "next/link";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography, IconButton, Box, useMediaQuery } from "@mui/material";
import AnimeCard from "@uikit/card/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getRecommendationAnimeList } from "@utils/fetcher/getRecommendationAnimeList.ts";
import { renderIfTrue } from "@utils/common/rendering";
import { Anime } from "src/types/anime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GeneralError from "@uikit/error/GeneralError";
import AnimeLoadingCard from "@uikit/card/AnimeLoadingCard";

type Data = {
  data: Anime[];
};

namespace Contanst {
  export const animeScore = 9;
}

namespace Caption {
  export const animeRecommendation = "Recommended Anime";
  export const errorTitle = "Upps, Error!";
  export const errorDesc =
    "There is something wrong when get anime recommendation";
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
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ["recommendationAnime"],
    queryFn: () => getRecommendationAnimeList(Contanst.animeScore),
  });
  const animes = data?.data ?? [];

  const isNotMobileSize = useMediaQuery("(min-width:460px)");

  return (
    <Box>
      <Typography sx={{ mt: 1, mb: 2, ml: 4 }} variant="h5">
        {Caption.animeRecommendation}
      </Typography>
      {isError ? (
        <GeneralError
          errorTitle={Caption.errorTitle}
          errorDescription={Caption.errorDesc}
        />
      ) : (
        <ScrollMenu
          LeftArrow={renderIfTrue(isNotMobileSize, <LeftArrow />)}
          RightArrow={renderIfTrue(isNotMobileSize, <RightArrow />)}
        >
          {isLoading
            ? Array.from(new Array(3))
            : animes.map((anime) => (
                <Box
                  key={anime.mal_id}
                  width="260px"
                  height="400px"
                  sx={{ mx: 1 }}
                >
                  <Link href={`/detail/${anime.mal_id}`}>
                    {anime ? (
                      <AnimeCard
                        title={anime.title}
                        score={anime.score ?? 0}
                        imageUrl={anime.images.jpg.image_url ?? ""}
                      />
                    ) : (
                      <AnimeLoadingCard />
                    )}
                  </Link>
                </Box>
              ))}
        </ScrollMenu>
      )}
    </Box>
  );
}

export default Recommendation;
