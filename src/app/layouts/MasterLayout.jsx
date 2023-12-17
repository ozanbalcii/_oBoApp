import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SubmenuWrapper from "../components/submenu/SubmenuWrapper";
import Desktop from "../components/desktop/Desktop";
import Header from "../components/Header/Header";

export default function MasterLayout() {
  const handleOpen = () => {
    setShowsubMenu(true);
  };
  return (
    <div className="bg-no-repeat sm:bg-gradient-to-r  sm:from-purple-900 sm:via-[#3311A7] sm:to-[#3311A7]">
      <Header />
      <Desktop />
    </div>
  );
}
