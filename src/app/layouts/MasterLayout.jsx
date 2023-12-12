import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import SubmenuWrapper from "../components/submenu/SubmenuWrapper";
import DesktopWrapper from "../components/desktop/DesktopWrapper";

export default function MasterLayout() {
  return (
    <div >
      <HeaderWrapper />
      <DesktopWrapper />
      <SubmenuWrapper />
    </div>
  );
}
