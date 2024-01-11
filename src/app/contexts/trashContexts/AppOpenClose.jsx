import { createContext, useContext, useState } from "react";
import "animate.css/animate.min.css";
export const AppOpenCloseContext = createContext();

export function AppOpenCloseProvider({ children }) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [vsCodeOpen, setVsCodeOpen] = useState(false);

  const [cvOpen, setCvOpen] = useState(false);

  //! mybe..
  // const handleButtonClick = () => {
  //   switch (type) {
  //     case "linkedin":
  //       setOpen((prevOpen) => !prevOpen);
  //       break;
  //     case "cv":
  //       setClose((prevCvClose) => !prevCvClose);
  //       break;
  //     default:
  //   }
  // };

  const handleButtonLinkedin = () => {
        setOpen((prevOpen) => !prevOpen);
    }

  const handleButtonPdf = () => {
    setClose((prevClose) => !prevClose);
  };

  const handleButtonVsCode = () => {
    setVsCodeOpen((prevVsCodeOpen) => !prevVsCodeOpen);
  };


  const data = {
    setType,
    type,
    open,
    cvOpen,
    handleButtonLinkedin,
    handleButtonPdf,
    handleButtonVsCode,
    close,
    vsCodeOpen,
  };

  return (
    <AppOpenCloseContext.Provider value={data}>
      {children}
    </AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);
