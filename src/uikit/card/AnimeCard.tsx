import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  title: string;
  score: number;
};

namespace Caption {
  export const score = "Score";
  export const seeAnime = "See Anime";
}

function GeneralCard({ title, score }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {`${score} ${Caption.score}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: 2 }}>
        <Chip
          color="primary"
          label={Caption.seeAnime}
          clickable
          icon={<ArrowForwardIcon />}
        />
      </CardActions>
    </Card>
  );
}

export default GeneralCard;
