import { createContext, useContext, useState } from "react";
import "animate.css/animate.min.css";

export const AppOpenCloseContext = createContext();

export function AppOpenCloseProvider({ children }) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [vsCodeOpen, setVsCodeOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [finder, setFinder] = useState(true);
  const [infoBox, setInfoBox] = useState(false);
  const [notice, setNtoice] = useState(false);
  const [infoWeb, setInfoWeb] = useState(false);
  const [customer, setCustomer] = useState(true);
  const [size, setSize] = useState(false);

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
    setVsCodeOpen(false);
    setClose(false);
    setCustomer(false);
    setFinder(!finder);
  };

  const handleButtonPdf = () => {
    setClose((prevClose) => !prevClose);
    setOpen(false);
    setVsCodeOpen(false);
    setCustomer(false);
    setFinder(!finder);
  };
  const handleButtonVsCode = () => {
    setVsCodeOpen((prevVsCodeOpen) => !prevVsCodeOpen);
    setOpen(false);
    setClose(false);
    setCustomer(false);
    setFinder(!finder);
  };
  const handleButtonInfoBox = () => {
    setInfoBox((prevInfoBox) => !prevInfoBox);
    setVsCodeOpen(false);
    setOpen(false);
    setClose(false);
    setCustomer(false);
    setFinder(!finder);
  };
  const handleButtonCustomer = () => {
    setCustomer((prevCustomer) => !prevCustomer);
    setInfoWeb(false);
    setVsCodeOpen(false);
    setOpen(false);
    setClose(false);
    setFinder(!finder);
  };

  const handleButtonNotice = () => {
    setNtoice(!notice);
  };
  const handleButtonInfoWeb = () => {
    setInfoWeb(!infoWeb);
  };

  const handleButtonSize = () => {
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
    handleButtonInfoBox,
    handleButtonNotice,
    handleButtonInfoWeb,
    handleButtonCustomer,
    size,
    close,
    vsCodeOpen,
    finder,
    infoBox,
    notice,
    infoWeb,
    customer,
  };

  return (
    <AppOpenCloseContext.Provider value={data}>
      {children}
    </AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);