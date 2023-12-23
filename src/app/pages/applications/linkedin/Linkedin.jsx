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
import LinkedinBodyLeftSide from "./components/Body/LinkedinBodyLeftSide";
import LinkedinBodyRightSide from "./components/LinkedinBodyRightSide";

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
              // icon={
              //   iconAppear ? (
              //     <SVG
              //       icon="x, cancel, close"
              //       className="rounded-md font-bold transition-all"
              //       size={8.5}
              //     />
              //   ) : null
              // }
              className=" bg-slate-700 hover:bg-red-400 rounded-full  w-[14px] h-[9px]  "
            />
            <Button
              onMouseEnter={handleOpenIcon}
              // icon={
              //   iconAppear ? (
              //     <SVG
              //       icon="enlarge2"
              //       className="rounded-md font-bold transition-all"
              //       size={7.5}
              //     />
              //   ) : null
              // }
              className="relative bg-slate-700 hover:bg-yellow-400 rounded-full w-[14px] h-[9px] flex items-center justify-center"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
            <Button
              // icon={
              //   iconAppear ? (
              //     <SVG
              //       icon="minus"
              //       className="rounded-md font-bold transition-all"
              //       size={8.5}
              //     />
              //   ) : null
              // }
              className=" bg-slate-700 hover:bg-green-400  rounded-full w-[14px] h-[9px]  flex items-center justify-center"
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

          <LinkedinHeader />
   
          <Collapse className="bg-[#F4F2EE]" in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                <div className="grid grid-cols-10 pl-[19.5rem] pr-[19.5rem] gap-5 ">
                  <div className="col-span-7  p-4 rounded-l-md">
                    <LinkedinBodyLeftSide />
                  </div>
                  <div className="col-span-3  p-4 rounded-r-md pl-10">
                  <LinkedinBodyRightSide/>
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
