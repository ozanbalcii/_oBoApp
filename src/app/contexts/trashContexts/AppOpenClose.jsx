import { createContext, useContext, useState } from "react";
import 'animate.css/animate.min.css'; 
export const AppOpenCloseContext = createContext();


export function AppOpenCloseProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [wait, setWait] = useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleButtonWait = () => {
    setWait(!wait);
  };

  const data = {
    open,
    wait,
    setOpen,
    handleButtonClick,
    handleButtonWait,
    
  };

  return (
    <AppOpenCloseContext.Provider  value={data}>{children}</AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);