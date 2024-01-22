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
    setReadme(false);
    setProjects(false)
  };

  const handleTabOpenOboApp = () => {
    setOboApp(true);
  };

  const handleProjects = () => {
    setProjects((projects) => !projects);
    setOboApp(false)
    setReadme(false)
  };

  const handleTabOpenProjects = () => {
    setProjects(true);
  };

  const handleReadme = () => {
    setReadme((readme) => !readme);
    setOboApp(false)
    setProjects(false)
  };

  const handleTabOpenReadme = () => {
    setReadme(true);
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
    handleTabOpenOboApp,
    tabOBoApp,
    handleTabOpenReadme,
    tabProjects,
    handleTabOpenProjects,
    tabReadme,
  };

  return (
    <FolderContext.Provider value={data}>{children}</FolderContext.Provider>
  );
}

export const useFolderContext = () => useContext(FolderContext);
