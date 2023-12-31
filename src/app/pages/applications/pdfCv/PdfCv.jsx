import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import "animate.css/animate.min.css";
import Button from "../../../components/common/Button";
import SVG from "../../../assets/svg/SVG";
import { PdfCvContext, usePdfCvContext } from "../../../contexts/PdfCvProvider";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../contexts/trashContexts/AppOpenClose";
import Pdf from "./components/Pdf";

export default function PdfCv() {
  const [expanded, setExpanded] = React.useState(false);
  const [iconAppear, setIconAppear] = React.useState(false);
  const { close, handleButtonPdf } =
    useAppOpenCloseContext(AppOpenCloseContext);
  const { loading, info } = usePdfCvContext(PdfCvContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [url, setUrl] = React.useState("https:www.obozan.com/cv/ozanbalci/");
  const handleOpenIcon = () => {
    setIconAppear(!iconAppear);
  };
  console.log(info, "wc molası");
  return (
    <div
      className={`flex justify-center transition-all ${
        close ? "animate__animated animate__backInUp " : ""
      }`}
    >
      <div
        className="scroll-container"
        style={{ maxHeight: "800px", overflowY: "auto" }}
      >
      <Card sx={{ maxWidth: 1600 }}>
          <div className="bg-[#09060f] flex items-center gap-2 p-1 pl-4 pt-1 pb-1">
            <Button
              onClick={() => {
                handleButtonPdf();
              }}
              className="bg-slate-700 hover:bg-red-400 rounded-full w-[14px] h-[9px]"
            />
            <Button
              onClick={() => {
                handleButtonPdf();
              }}
              className="bg-slate-700 hover:bg-yellow-400  rounded-full w-[14px] h-[9px] flex items-center justify-center"
            />
            <Button
              onMouseEnter={handleOpenIcon}
              className="relative bg-slate-700 hover:bg-green-400 rounded-full w-[14px] h-[9px] flex items-center justify-center"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
            <div className="pl-5">
              <div className="flex items-center justify-center gap-1 text-white border border-gray-700 rounded-xl p-2 hover:bg-slate-900 ">
                <Button
                  icon={
                    <SVG
                      icon="document-file-pdf"
                      className="rounded-md"
                      size={23}
                    />
                  }
                  className="flex gap-3 items-center"
                />
                <text className="text-[15px] font-pFont ">ozanbalci.pdf</text>
                <Button
                   onClick={() => {
                    handleButtonPdf();
                  }}
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
          <div className="flex items-center bg-gray-300">
            <div className=" text-darky p-3 font-bold"> Download in PDF: </div>
            <div>
              <Button className="bg-green-600 text-white">Download</Button>
            </div>
          </div>
          <Pdf />
          <Collapse
            className="bg-[#F4F2EE]"
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent className="!pt-0">
              <Typography>
                alsaopdsjı  
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}