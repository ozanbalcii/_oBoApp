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
import Button from "../../../components/common/Button";
import Sidebar from "./components/Sidebar";
import {
  FolderContext,
  useFolderContext,
} from "../../../contexts/vsCode/FolderProvider";
import MyProjects from "./components/myProjects";
import Readme from "./components/readme/Readme";
import OBoApp from "./components/oBoApp/OBoApp";
import Tab from "./components/Tabs/Tab";
import Welcome from "./components/Welcome";

export default function VsCode() {
  const [expanded, setExpanded] = React.useState(false);
  const {
    oBoApp,
    projects,
    readme,
    handleButtonSize,
    windowSize,
    tabOBoApp,
    tabProjects,
    tabReadme,
  } = useFolderContext(FolderContext);
  const { open, handleButtonVsCode } =
    useAppOpenCloseContext(AppOpenCloseContext);
    console.log(readme, oBoApp, projects, 'ddddd')
  return (
    <div
      className={`flex justify-center transition-all w-full ${
        open ? "animate__animated animate__backInUp " : ""
      }`}
    >
      <div
        className="scroll-container"
        style={{
          maxHeight: !windowSize ? "9999px" : "700px",
          maxWidth: !windowSize ? "9999px" : "500px",
          overflowY: "auto",
        }}
      >
        <Card sx={{ maxWidth: 1900 }}>
          <div className="bg-[#282626fc] flex items-center gap-2 pt-3 pb-3 pl-3 pr-3">
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
              className="bg-[#1E1E1E] hover:bg-yellow-400 rounded-full w-[14px] h-[9px] flex items-center justify-center"
            />
            <Button
              onClick={() => {
                handleButtonSize();
              }}
              className="relative bg-[#1E1E1E] hover:bg-green-400 rounded-full w-[14px] h-[9px] flex items-center justify-center"
            />
          </div>
          <Tab />
          <div>
            <div className="flex">
              <Sidebar />
              {readme || oBoApp || projects ? (
                <>
                  {readme && tabReadme && (
                    <div className="bg-gray-300 ">
                      <Readme />
                    </div>
                  )}
                  {oBoApp && tabOBoApp && (
                    <div className="bg-gray-300 ">
                      <OBoApp />
                    </div>
                  )}
                  {projects && tabProjects && (
                    <div className="bg-gray-300 ">
                      <MyProjects />
                    </div>
                  )}
                </>
              ) : (
                <Welcome />
              )}
            </div>
          </div>
          <Collapse
            className="bg-[#333333] border-r-[0.5px] border-t-[0.5px] border-gray-300 text-white h-full flex items-center justify-center"
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography>
                {/*  Terminal will come here */}
                <div className="grid grid-cols-10 pl-[19.5rem] pr-[19.5rem] gap-5 ">
                  <div className="col-span-7  p-4 rounded-l-md"></div>
                  <div className="col-span-3 pt-4 rounded-r-md !pl-0"></div>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
