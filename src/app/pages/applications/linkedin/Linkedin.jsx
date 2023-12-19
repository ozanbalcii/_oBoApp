import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "../../../components/common/Button";
import SVG from "../../../assets/svg/SVG";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center">
      <Card className="" sx={{ maxWidth: 1600 }}>
        <div className="bg-slate-900 flex items-center gap-2 p-1">
          <Button className="bg-red-400 rounded-full ">x</Button>
          <span className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center">
            <Button
              className="relative"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <SVG
                icon="enlarge2"
                className="rounded-md font-bold transition-all"
                size={15}
              />
            </Button>
          </span>
          <Button className="bg-green-400 rounded-full">-</Button>
          <div className="pl-5">
            <div className="text-white border border-gray-500 rounded-xl p-1 hover:bg-slate-900 ">
              <div className="flex gap-3 items-center">
                <SVG icon="linkedin" className={"rounded-md"} size={23} />
             

                <span>Linkedin</span>
                <Button className="rounded-full w-1 h-4 text-xs ">X</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-[#200924] p-3">
  <div className=" rounded-xl text-white">
  <SVG icon="arrow-left2" className={"rounded-md"} size={19} />
  </div>
  <div className="bg-slate-800 rounded-xl text-white pl-3 text-sm flex items-center ">
  http://localhost:5173/linkedin-ozanbalci98
  </div>
  <div className=''>
    {/* buttons */} 3
  </div>
</div>

        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
