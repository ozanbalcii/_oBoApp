import { createContext, useContext, useState } from "react";
import "animate.css/animate.min.css";
export const AppOpenCloseContext = createContext();

export function AppOpenCloseProvider({ children }) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const [cvOpen, setCvOpen] = useState(false);

  //! To open the page with one click: I need to write 2 separate functions.
  const handleButtonClick = () => {
    switch (type) {
      case "linkedin":
        setOpen((prevOpen) => !prevOpen);
        break;
      case "cv":
        setClose((prevCvClose) => !prevCvClose);
        break;
      default:
    }
  };

  const handleCloseLinkedin = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClosePdf = () => {
    setClose((prevClose) => !prevClose);
  };

  const data = {
    setType,
    type,
    open,
    setOpen,
    cvOpen,
    setCvOpen,
    handleButtonClick,
    handleCloseLinkedin,
    handleClosePdf,
    setClose,
    close,
  };

  return (
    <AppOpenCloseContext.Provider value={data}>
      {children}
    </AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);
