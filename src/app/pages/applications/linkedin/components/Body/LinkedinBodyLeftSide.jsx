import React from "react";
import BodyIntro from "./Intro/BodyIntro";
import About from "./About/About";
import Activity from "./Activity/Activity";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import LicensesCertifications from "./LicensesCertifications/LicensesCertifications";
import Skills from "./Skills/Skills";

export default function LinkedinBodyLeftSide() {
  return (
    <>
      <div className="">
        <BodyIntro />
        <About />
        <Activity />
        <Experience />
        <Education />
        <LicensesCertifications />
        <Skills />
      </div>
    </>
  );
}
