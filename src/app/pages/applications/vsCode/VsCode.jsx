import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";


import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../contexts/trashContexts/AppOpenClose";
import "animate.css/animate.min.css";
import { AppBar } from "@mui/material";
import Button from "../../../components/common/Button";
import SVG from "../../../assets/svg/SVG";
import LinkedinHeader from "../linkedin/components/LinkedinHeader";
import LinkedinBodyLeftSide from "../linkedin/components/Body/LinkedinBodyLeftSide";
import LinkedinBodyRightSide from "../linkedin/components/LinkedinBodyRightSide";
import LinkedinFooter from "../linkedin/components/LinkedinFooter";
import Sidebar from "./components/Sidebar";

export default function VsCode() {
  const [expanded, setExpanded] = React.useState(false);
  const [iconAppear, setIconAppear] = React.useState(false);

  const { open, handleButtonVsCode} =
    useAppOpenCloseContext(AppOpenCloseContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [url, setUrl] = React.useState(
    "https://www.linkedin.com/in/ozanbalci98/"
  );

  const handleOpenIcon = () => {
    setIconAppear(!iconAppear);
  };

  return (
    <div
      className={`flex justify-center transition-all ${
        open ? "animate__animated animate__backInUp " : ""
      }`}
    >
      <div
        className="scroll-container"
        style={{ maxHeight: "800px", overflowY: "auto" }}
      >
        
        <Card sx={{ maxWidth: 1600 }}>
          <div className="bg-[#333333] flex items-center gap-2 p-3">
            <Button
              onClick={() => {
                handleButtonVsCode();
              }}
              className="bg-[#1E1E1E] hover:bg-red-400 rounded-full w-[14px] h-[9px]"
            />
            <Button
              onClick={() => {
                handleButtonVsCode();
              }}
              className="bg-[#1E1E1E] hover:bg-yellow-400  rounded-full w-[14px] h-[9px] flex items-center justify-center"
            />
            <Button
              onMouseEnter={handleOpenIcon}
              className="relative bg-[#1E1E1E] hover:bg-green-400 rounded-full w-[14px] h-[9px] flex items-center justify-center"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
          </div>
          <Sidebar />
              

          <LinkedinHeader />
          <Collapse
            className="bg-[#F4F2EE]"
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography>
                <div className="grid grid-cols-10 pl-[19.5rem] pr-[19.5rem] gap-5 ">
                  <div className="col-span-7  p-4 rounded-l-md">
                    <LinkedinBodyLeftSide />
                  </div>
                  <div className="col-span-3 pt-4 rounded-r-md !pl-0">
                    <LinkedinBodyRightSide />
                  </div>
                </div>
                <LinkedinFooter />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
