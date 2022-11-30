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
  imageUrl: string;
};

namespace Caption {
  export const score = "Score";
  export const seeAnime = "See Anime";
}

function GeneralCard({ title, score, imageUrl }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" src={imageUrl} alt={title} />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontSize: 16,
            textOverflow: "ellipsis",
            overflowX: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
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
