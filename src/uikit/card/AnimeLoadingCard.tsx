import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function AnimeLoadingCard() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
}
