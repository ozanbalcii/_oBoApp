import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import FooterWrapper from "../components/footer/FooterWrapper";
import DesktopWrapper from "../pages/desktop/DesktopWrapper";
//s
export default function MasterLayout() {
  return (
    <>
      <HeaderWrapper />
      <DesktopWrapper />
      <FooterWrapper />
    </>
  );
}
