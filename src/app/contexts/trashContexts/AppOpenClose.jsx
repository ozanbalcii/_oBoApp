import { createContext, useContext, useState } from "react";

export const AppOpenCloseContext = createContext();


export function AppOpenCloseProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    setOpen(!open);
  };

  const data = {
    open,
    setOpen,
    handleButtonClick
  };

  return (
    <AppOpenCloseContext.Provider value={data}>{children}</AppOpenCloseContext.Provider>
  );
}

export const useAppOpenCloseContext = () => useContext(AppOpenCloseContext);