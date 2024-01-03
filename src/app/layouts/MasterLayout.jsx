import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SubmenuWrapper from "../components/submenu/SubmenuWrapper";
import Desktop from "../components/desktop/Desktop";
import Header from "../components/Header/Header";
import Linkedin from '../pages/applications/linkedin/Linkedin'

export default function MasterLayout() {
  return (
    <div className="bg-no-repeat sm:bg-gradient-to-r sm:from-purple-900 sm:via-[#3311A7] sm:to-[#3311A7]">
      <Header />
      {/* <button onClick={handleButtonClick}>Toggle Linkedin</button>
      {linkedinVisible && <Linkedin />} */}
      <Desktop />
    </div>
  );
}
