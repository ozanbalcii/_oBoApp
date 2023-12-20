import * as React from "react";
import Card from "@mui/material/Card";
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
import LinkedinHeader from "./components/LinkedinHeader";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [iconAppear, setIconAppear] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [url, setUrl] = React.useState(
    "http://localhost:5173/linkedin-ozanbalci98"
  );
  const handleOpenIcon = () => {
    setIconAppear(!iconAppear);
    console.log(iconAppear, "iconAppear");
  };
  return (
    <div className="flex justify-center ">
      <div
        className="scroll-container"
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        <Card className="" sx={{ maxWidth: 1600 }}>
          <div className="bg-[#09060f] flex items-center gap-2 p-1 pl-4 pt-1 pb-1">
            <Button
              icon={
                iconAppear ? (
                  <SVG
                    icon="x, cancel, close"
                    className="rounded-md font-bold transition-all"
                    size={11}
                  />
                ) : null
              }
              className=" bg-slate-700 hover:bg-red-400 rounded-full w-4 h-4 "
            />
            <Button
              onMouseEnter={handleOpenIcon}
              icon={
                iconAppear ? (
                  <SVG
                    icon="enlarge2"
                    className="rounded-md font-bold transition-all"
                    size={11}
                  />
                ) : null
              }
              className="relative bg-slate-700 hover:bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
            <Button
              icon={
                iconAppear ? (
                  <SVG
                    icon="minus"
                    className="rounded-md font-bold transition-all"
                    size={11}
                  />
                ) : null
              }
              className=" bg-slate-700 hover:bg-green-400  rounded-full h-4 w-4 flex items-center justify-center"
            />

            <div className="pl-5">
              <div className="flex items-center justify-center gap-1 text-white border border-gray-700 rounded-xl p-2 hover:bg-slate-900 ">
                <Button
                  icon={
                    <SVG icon="linkedin" className="rounded-md" size={23} />
                  }
                  className="flex gap-3 items-center  "
                ></Button>
                <text className="text-[15px] font-pFont ">Linkedin</text>
                <Button
                  className="ml-auto"
                  icon={<SVG icon="x, cancel, close" size={11} />}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-[#282828] p-3">
            <div className=" text-white gap-1 flex ">
              <div>
                <Button
                  className="ml-auto hover:bg-[#F8FAFC]"
                  icon={<SVG icon="arrow-left2" size={13} />}
                />
              </div>
              <div>
                <Button
                  className="ml-auto hover:bg-[#F8FAFC]"
                  icon={<SVG icon="forward" size={13} />}
                />
              </div>
              <div>
                <Button
                  className="ml-auto hover:bg-[#F8FAFC]"
                  icon={<SVG icon="loop2" size={13} />}
                />
              </div>
              <div>
                <Button
                  className="ml-auto hover:bg-[#F8FAFC] "
                  icon={<SVG icon="home3" size={13} />}
                />
              </div>
            </div>
            <div className="bg-[#536872] rounded-2xl text-white  text-sm flex items-center">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-[#536872] rounded-2xl hover:opacity-75 text-white pl-3 text-sm flex items-center w-full"
              />
            </div>
            <div>
              <div className=" text-white gap-1 flex ">
                <div>
                  <Button
                    className="ml-auto hover:bg-[#F8FAFC]"
                    icon={<SVG icon="music" size={13} />}
                  />
                </div>
                <div>
                  <Button
                    className="ml-auto hover:bg-[#F8FAFC] "
                    icon={<SVG icon="star-full" size={13} />}
                  />
                </div>
                <div>
                  <Button
                    className="ml-auto hover:bg-[#F8FAFC]"
                    icon={<SVG icon="power-cord" size={13} />}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
          {/*  */}
          {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}
          <LinkedinHeader />

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
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
