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

export default function Desktop() {
  const { setShowsubMenu } = useSubmenuContext(SubmenuContext);
  const { open, handleButtonClick } = useAppOpenCloseContext(AppOpenCloseContext);

  const handleClose = () => {
    setShowsubMenu(false);
  };

  return (
    <div className="w-full h-screen bg-no-repeat sm:bg-gradient-to-r sm:from-purple-900 sm:via-[#3311A7] sm:to-[#3311A7]">
      <div className=" pt-12 ">
        <div className="pl-6">
          <Button
            className={`flex flex-col text-white items-center z-30 ${
              open ? "hidden" : "flex"
            }`}
            onClick={handleButtonClick}
          >
            <SVG
              icon="linkedin"
              size={55}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2 rounded-xl"
            />
            <div className="!font-normal pt-[6px] ">Linkedin</div>
          </Button>
        </div>
        {open && <Linkedin className="z-40" />}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full pl-[4.063rem] pr-[4.063rem] pb-[0.313rem] transition-all">
        <div className="opacity-0 text-xs " onMouseEnter={handleClose}>
          -
        </div>
        <SubmenuWrapper />
      </div>
    </div>
  );
}
