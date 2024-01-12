import React from "react";
import { createContext, useContext, useState } from "react";

export const SideModalContext = createContext();

export const SideModalProvider = ({ children }) => {
  const [openSideModal, setOpenSideModal] = useState(false);

  const handleSideModal = () => {
    setOpenSideModal((prevOpenSideModal) => !prevOpenSideModal);
  };

  const data = {
    handleSideModal,
  };
  return (
    <SideModalContext.Provider value={data}>
      {children}
    </SideModalContext.Provider>
  );
};
export const useSideModalContext = () => useContext(SideModalContext);