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
    setOboApp(true);
    setReadme(false);
    setProjects(false)
  };
  const handleProjects = () => {
    setProjects(true);
    setOboApp(false)
    setReadme(false)
  };
  const handleReadme = () => {
    setReadme(true);
    setOboApp(false)
    setProjects(false)
  };

  const handleTabOpenOboApp = () => {
    setTabOboApp(true);
  };
  const handleTabCloseOboApp = () => {
    setTabOboApp(false);
  };
  const handleTabOpenProjects = () => {
    setTabProjects(true);
  };
  const handleTabCloseProjects = () => {
    setTabProjects(false);
  };
  const handleTabOpenReadme = () => {
    setTabReadme(true);
  };
  const handleTabCloseReadme = () => {
    setTabReadme(false);
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
    handleTabCloseOboApp,
    handleTabCloseProjects,
    handleTabCloseReadme,
  };

  return (
    <FolderContext.Provider value={data}>{children}</FolderContext.Provider>
  );
}

export const useFolderContext = () => useContext(FolderContext);