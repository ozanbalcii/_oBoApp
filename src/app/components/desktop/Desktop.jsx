// Desktop.jsx

import {
  DesktopContext,
  useStateContext,
} from "../../contexts/DesktopProvider";
import {
  SubmenuContext,
  useSubmenuContext,
} from "../../contexts/SubmenuProvider";
import SubmenuWrapper from "../submenu/SubmenuWrapper";

export default function Desktop() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);

  const handleClose = () => {
    setShowsubMenu(false);
    console.log(showsubMenu, "closed");
  }

  return (
    <div className="w-full h-screen">
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full pl-[4.063rem] pr-[4.063rem] pb-[0.313rem] transition-all">
        <div className="opacity-0 text-xs " onMouseEnter={handleClose}>
          -
        </div>
        <SubmenuWrapper />
      </div>
    </div>
  );
}
