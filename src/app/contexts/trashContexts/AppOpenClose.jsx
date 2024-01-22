import { createContext, useContext, useState } from "react";
import "animate.css/animate.min.css";
import { CodeContext, useCodeContext } from "../vsCode/Code";

export const AppOpenCloseContext = createContext();

export function AppOpenCloseProvider({ children }) {


  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [vsCodeOpen, setVsCodeOpen] = useState(false);
  const [finder, setFinder] = useState(true);
  const [size, setSize] = useState(false);

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
        setVsCodeOpen(false)
        setClose(false)
        setFinder(!finder)
    }

  const handleButtonPdf = () => {
    setClose((prevClose) => !prevClose);
    setOpen(false)
    setVsCodeOpen(false)
    setFinder(!finder)
  };

  const handleButtonVsCode = () => {
    setVsCodeOpen((prevVsCodeOpen) => !prevVsCodeOpen);
    setOpen(false);
    setClose(false);
    setFinder(!finder)
  };

  const handleButtonSize= () => {
    setSize((size) => !size);
  };
  const data = {
    setType,
    type,
    open,
    cvOpen,
    handleButtonLinkedin,
    handleButtonPdf,
    handleButtonVsCode,
    handleButtonSize,
    size,
    close,
    setClose,
    vsCodeOpen,
    finder,
  };

  return (
    <AppOpenCloseContext.Provider value={data}>
      {children}
    </AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);
