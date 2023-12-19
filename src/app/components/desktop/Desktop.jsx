// Desktop.jsx

import {
  DesktopContext,
  useStateContext,
} from "../../contexts/DesktopProvider";
import {
  SubmenuContext,
  useSubmenuContext,
} from "../../contexts/SubmenuProvider";

import Linkedin from "../../pages/applications/linkedin/Linkedin";
import SubmenuWrapper from "../submenu/SubmenuWrapper";

export default function Desktop() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);

  const handleClose = () => {
    setShowsubMenu(false);
    console.log(showsubMenu, "closed");
  }

  return (
    <div className="w-full h-screen">
     <div className=" pt-10">

     <Linkedin />

     {/* <div className="bg-purple-400 ">
      info box, to do list and  app icon etc. things will come here
      </div> */}

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
