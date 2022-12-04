import { Box, Skeleton, Stack, Typography } from "@mui/material";

namespace Caption {
  export const loadingText = "Loading Anime Detail...";
}

function AnimeLoadingCard() {
  return (
    <Box>
      <Typography variant="h6" textAlign="center">
        {Caption.loadingText}
      </Typography>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </Stack>
    </Box>
  );
}

export default AnimeLoadingCard;
