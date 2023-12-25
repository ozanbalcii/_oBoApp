import React from "react";
import BodyIntro from "./Intro/BodyIntro";
import About from "./About/About";
import Activity from "./Activity/Activity";
import Experience from "./Experience/Experience";

export default function LinkedinBodyLeftSide() {
  return (
    <>
      <div className="">
      <BodyIntro />
      <About />
      <Activity />
      <Experience />
        </div>
    </>
  );
}
