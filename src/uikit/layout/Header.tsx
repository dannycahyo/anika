import { Grid, Typography, Box } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

export default function Header() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Link href="/">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MovieCreationIcon sx={{ color: "white", mr: 1 }} />
            <Typography variant="h5" color="whitesmoke">
              Anika
            </Typography>
          </Box>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/favourite">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FavoriteIcon sx={{ color: "white", mr: 1 }} />
            <Typography variant="h5" color="whitesmoke">
              Favourite
            </Typography>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
}
