import {
  SubmenuContext,
  useSubmenuContext,
} from "../../contexts/SubmenuProvider";
import SubmenuWrapper from "../submenu/SubmenuWrapper";
import Linkedin from "../../pages/applications/linkedin/Linkedin";
import Button from "../common/Button";
import SVG from "../../assets/svg/SVG";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../contexts/trashContexts/AppOpenClose";
import PdfCv from "../../pages/applications/pdfCv/PdfCv";
import VsCode from "../../pages/applications/vsCode/VsCode";
import InfoBox from "../../pages/applications/infoBox/InfoBox";
import Customer from "../../pages/applications/customer/Customer";


export default function Desktop() {
  const { setShowsubMenu } = useSubmenuContext(SubmenuContext);
  const {
    handleButtonLinkedin,
    handleButtonPdf,
    handleButtonVsCode,
    handleButtonInfoBox,
    handleButtonCustomer,
    open,
    close,
    vsCodeOpen,
    infoBox,
    customer,
  } = useAppOpenCloseContext(AppOpenCloseContext);

  const handleClose = () => {
    setShowsubMenu(false);
  };

  return (
    <div className="w-full h-screen bg-no-repeat sm:bg-gradient-to-r sm:from-purple-900 sm:via-[#3311A7] sm:to-[#3311A7]">
      <div className="flex">
        <div className=" pt-12 ">
          <div className="pl-6">
            <Button
              className={`flex flex-col text-white items-center ${
                open || close || vsCodeOpen || infoBox || customer ? "hidden" : "flex"
              }`}
              onClick={() => {
                handleButtonLinkedin(); 
              }}
            >
              <SVG
                icon="linkedin"
                size={55}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 rounded-xl "
              />
              <div className="!font-normal pt-[6px] ">Linkedin</div>
            </Button>
          </div>
        </div>

        <div className=" pt-12 ">
          <div className="pl-6">
            <Button
              className={`flex flex-col text-white items-center  ${
                open || close || vsCodeOpen || infoBox || customer ? "hidden" : "flex"
              }`}
              onClick={() => {
                handleButtonPdf();
              }}
            >
              <SVG
                icon="document-file-pdf"
                size={55}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 rounded-xl"
              />
              <div className="!font-normal pt-[6px]">ozanbalci.pdf</div>
            </Button>
          </div>
        </div>
        <div className=" pt-12 ">
          <div className="pl-6">
            <Button
              className={`flex flex-col text-white items-center  ${
                open || close || vsCodeOpen || infoBox || customer ? "hidden" : "flex"
              }`}
              onClick={() => {
                handleButtonVsCode();
              }}
            >
              <SVG
                icon="vsCode"
                size={55}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 rounded-xl"
              />
              <div className="!font-normal pt-[6px] ">vsCode</div>
            </Button>
          </div>
        </div>
        <div className=" pt-12 ">
          <div className="pl-6">
            <Button
              className={`flex flex-col text-white items-center  ${
                open || close || vsCodeOpen || infoBox || customer ? "hidden" : "flex"
              }`}
              onClick={() => {
                handleButtonCustomer();
              }}
            >
              <SVG
                icon="customer"
                size={55}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 "
              />
              <div className="!font-normal pt-[6px] ">Customer Table</div>
            </Button>
          </div>
        </div>
        <div className=" pt-12 ">
          <div className="pl-6">
            <Button
              className={`flex flex-col text-white items-center  ${
                open || close || vsCodeOpen || infoBox || customer  ? "hidden" : "flex"
              }`}
              onClick={() => {
                handleButtonInfoBox();
              }}
            >
              <SVG
                icon="box-filled"
                size={55}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 text-[#16a33ee3]"
              />
              <div className="!font-normal pt-[6px] ">infoBox</div>
            </Button>
          </div>
        </div>
      </div>

      {open && <Linkedin className="z-40" />}
      {close && <PdfCv className="z-40" />}
      {vsCodeOpen && <VsCode className="z-40"/>}
      {infoBox && <InfoBox className="z-40"/>}
      {customer && <Customer className="z-40"/>}

      {/* {(!open || !close) && (
        <>
          <div className="z-0 bg-white text-darky">
            {" "}
            2 there is an error when the page opens, I need to fix it.
          </div>
          <div className="flex justify-center text-white">
            <div className="border p-5 rounded-lg">
              <div className="font-bold text-[20px] text-center">
                InfoBox
                <hr />
                <a
                  href="https://github.com/ozanbalcii/_oBoApp"
                  target="_blank"
                  className="text-[22px] text-green-600 "
                >
                  source codes: https://github.com/ozanbalcii/_oBoApp
                </a>
                <ul className="list-none text-[17px]">
                  reminders:
                  <li>the submenu works like on mac,</li>
                  <li>twill be active in the next times</li>
                  <span>(for example, you can click the apple button)</span>
                </ul>
              </div>
              <div className="font-cantarell pt-2">
                / to be added /
                <li>linkedin etc apps will be further developed, </li>
                <li>the submenu will be beautified, </li>
                <li>search bar should be improved, </li>
                <li>
                  The white background bug will be fixed when Google console is
                  opened.
                </li>
                <li>Loading button, loading effect/page.</li>
                <li>More applications (like LinkedIn...).</li>
                <li>Responsive design will be more stable.</li>
                <li>Header menu design will be more corrected.</li>
                <li>Header menu design will be further refined.</li>
                <li>Redux can be added to the project.</li>
                <li>Draggable Item maybe can be added for Desktop.</li>
                <div className="text-[22px] text-red-500">
                  add what has been done
                </div>
                <div className="text-[22px] text-red-500">
                  documentation about the project should be added.
                </div>
              </div>
            </div>
          </div>
        </>
      )} */}

      {/* <DraggableItem /> */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full pl-[4.063rem] pr-[4.063rem] pb-[0.313rem] transition-all">
        <div className="opacity-0 text-xs∂" onMouseEnter={handleClose}>
          -
        </div>
        <SubmenuWrapper />
      </div>
    </div>
  );
}
