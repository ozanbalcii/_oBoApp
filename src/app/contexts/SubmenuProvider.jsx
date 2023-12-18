import { createContext, useContext, useState } from "react";

export const SubmenuContext = createContext();

export const SubmenuProvider = ({ children }) => {
const[showsubMenu, setShowsubMenu] = useState(false);

  const data = {
    showsubMenu,
    setShowsubMenu,
  };

  return (
    <SubmenuContext.Provider value={data}>{children}</SubmenuContext.Provider>
  );
};

export const useSubmenuContext = () => useContext(SubmenuContext);
