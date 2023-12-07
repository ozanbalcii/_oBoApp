import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import SubmenuWrapper from "../components/submenu/SubmenuWrapper";
import DesktopWrapper from "../pages/desktop/DesktopWrapper";
//s
export default function MasterLayout() {
  return (
    <>
      <div className="mx-auto overflow-hidden">
        <div>
          <HeaderWrapper />
        </div>
        <div>
          <DesktopWrapper />
        </div>
        <div>
          <SubmenuWrapper />
        </div>
      </div>
    </>
  );
}
