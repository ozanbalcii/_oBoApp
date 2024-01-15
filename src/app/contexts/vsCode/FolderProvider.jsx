import { createContext, useContext, useState } from "react";

export const FolderContext = createContext();

export function FolderProvider({ children }) {
  const [folder, setFolder] = useState(false);

  const handleFolder = () => {
    setFolder((prevFolder) => !prevFolder);
  };

  const data = {
    folder,
    handleFolder,
  };

  return (
    <FolderContext.Provider value={data}>{children}</FolderContext.Provider>
  );
}

export const useFolderContext = () => useContext(FolderContext);
