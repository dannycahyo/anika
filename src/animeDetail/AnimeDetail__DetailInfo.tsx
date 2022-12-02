import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  Paper,
  Divider,
  Backdrop,
  CardMedia,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Anime } from "src/types/anime";
import { useRouter } from "next/router";
import Image from "next/image";
import AnimeLoadingCard from "@uikit/card/AnimeLoadingCard";

namespace Caption {
  export const year = "Year";
  export const score = "Score";
  export const back = "Back";
  export const animeDetail = "Anime Detail";
  export const synopsis = "Synopsis";
  export const imageAlt = "anime image";
  export const genres = "Genres";
  export const licensors = "Licensors";
}

type Props = {
  anime: Anime;
  isLoading: boolean;
};

type AdditionalInfoProps = {
  title: string;
  name: string;
};

function AdditionalInfo({ title, name }: AdditionalInfoProps) {
  return (
    <Grid item>
      <Paper elevation={0}>
        <Stack sx={{ py: 0.5, px: 1 }}>
          <Typography variant="body2" color="gray">
            {title}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            {name}
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
}

function DetailInfo({ anime, isLoading }: Props) {
  const router = useRouter();

  const handleBackClick = (): void => router.back();
  const { title, year, score, synopsis, trailer, images, genres, licensors } =
    anime;

  const [isOpenVideo, setIsOpenVideo] = React.useState<boolean>(false);
  const handleClose = () => {
    setIsOpenVideo(false);
  };
  const handleToggle = () => {
    setIsOpenVideo(!isOpenVideo);
  };

  const isMobileSize = useMediaQuery("(max-width:460px)");

  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <Stack direction="row" alignItems="center">
          <IconButton
            aria-label="back-button"
            color="primary"
            onClick={() => handleBackClick()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            {Caption.back}
          </Typography>
        </Stack>
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          {Caption.animeDetail}
        </Typography>
      </Grid>
      <Grid container>
        <Grid
          item
          sm={10}
          md={6}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <Box onClick={() => handleToggle()} sx={{ cursor: "pointer" }}>
            {isLoading ? (
              <AnimeLoadingCard />
            ) : (
              <Image
                src={images.webp.large_image_url ?? ""}
                alt={Caption.imageAlt}
                height={260}
                width={isMobileSize ? 300 : 340}
              />
            )}

            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={isOpenVideo}
              onClick={handleClose}
            >
              <CardMedia
                component="iframe"
                src={trailer.embed_url ?? ""}
                width="220"
                height="400"
              />
            </Backdrop>
          </Box>
        </Grid>
        <Grid
          item
          sm={10}
          md={6}
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Divider sx={{ my: 1 }} />
          <Stack direction="row" alignItems="center">
            <Stack
              sx={{ py: 0.5, px: 1, width: "100px" }}
              direction="row"
              alignItems="center"
              spacing={0.5}
            >
              <Typography variant="body2" color="gray">
                {Caption.score}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                {score}
              </Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack
              sx={{ py: 0.5, px: 1, width: "100px" }}
              direction="row"
              alignItems="center"
              spacing={0.5}
            >
              <Typography variant="body2" color="gray">
                {Caption.year}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                {year}
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            gridTemplateColumns="repeat(3,1fr)"
            spacing={2}
            sx={{ pt: 2 }}
          >
            {genres.map((genre) => (
              <AdditionalInfo
                key={genre.mal_id}
                title={Caption.genres}
                name={genre.name}
              />
            ))}
          </Grid>
          <Grid
            container
            gridTemplateColumns="repeat(3,1fr)"
            spacing={2}
            sx={{ pt: 2 }}
          >
            {licensors.map((licensor) => (
              <AdditionalInfo
                key={licensor.mal_id}
                title={Caption.licensors}
                name={licensor.name}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ py: 2 }}>
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          {Caption.synopsis}
        </Typography>
        <Typography paragraph textAlign="justify" mt={1}>
          {isLoading ? <Skeleton /> : `${synopsis}`}
        </Typography>
      </Box>
    </Container>
  );
}

export default DetailInfo;
