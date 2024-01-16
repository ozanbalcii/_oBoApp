import { createContext, useContext, useState } from "react";

export const FolderContext = createContext();

export function FolderProvider({ children }) {
  const [oBoApp, setOboApp] = useState(false);
  const [tabOBoApp, setTabOboApp] = useState(false);
  const [projects, setProjects] = useState(false);
  const [tabProjects, setTabProjects] = useState(false);
  const [readme, setReadme] = useState(false);
  const [tabReadme, setTabReadme] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  const handleOboApp = () => {
    setOboApp((oBoApp) => !oBoApp);
  };

  const handleTabOboApp = () => {
    setTabOboApp((tabOBoApp) => !tabOBoApp);
  };

  const handleProjects = () => {
    setProjects((projects) => !projects);
  };

  const handleTabProjects = () => {
    setTabProjects((tabProjects) => !tabProjects);
  };

  const handleReadme = () => {
    setReadme((readme) => !readme);
  };

  const handleTabReadme = () => {
    setTabReadme((tabReadme) => !tabReadme);
  };

  const handleSidebarToggle = () => {
    setToggle(!toggle);
  };

  const handleButtonSize = () => {
    setWindowSize((windowSize) => !windowSize);
  };

  const data = {
    handleOboApp,
    oBoApp,
    handleProjects,
    projects,
    handleReadme,
    readme,
    handleSidebarToggle,
    toggle,
    handleButtonSize,
    windowSize,
    handleTabOboApp,
    tabOBoApp,
    handleTabProjects,
    tabProjects,
    handleTabReadme,
    tabReadme,
  };

  return (
    <FolderContext.Provider value={data}>{children}</FolderContext.Provider>
  );
}

export const useFolderContext = () => useContext(FolderContext);
