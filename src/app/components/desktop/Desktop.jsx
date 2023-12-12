// Desktop.jsx

import {
  DesktopContext,
  useStateContext,
} from "../../contexts/DesktopProvider";
import { SubmenuContext, useSubmenuContext } from "../../contexts/SubmenuProvider";

export default function Desktop() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);

  const handleClose = () => {
    setShowsubMenu(false);
    console.log(showsubMenu, 'closed');
  };

  return (
    <div className="w-full h-screen bg-bgDesktop  "
    onMouseEnter={handleClose}
    >
    </div>
  );
}
