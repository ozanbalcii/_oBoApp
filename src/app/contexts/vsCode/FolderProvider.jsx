import { createContext, useContext, useState } from "react";

export const FolderContext = createContext();

export function FolderProvider({ children }) {
  const [oBoApp, setOboApp] = useState(false);
  const [projects, setProjects] = useState(false);
  const [readme, setReadme] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  const handleOboApp = () => {
    setOboApp((oBoApp) => !oBoApp);
    setProjects(false);
    setReadme(false);
  };

  const handleProjects = () => {
    setProjects((projects) => !projects);
    setOboApp(false);
    setReadme(false);
  };
  const handleReadme = () => {
    setReadme((readme) => !readme);
    setOboApp(false);
    setProjects(false);
  };

  const handleSidebarToggle = () => {
    setToggle(!toggle)
  }

  const handleButtonSize= () => {
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
    windowSize
  };

  return (
    <FolderContext.Provider value={data}>{children}</FolderContext.Provider>
  );
}

export const useFolderContext = () => useContext(FolderContext);
