import { createContext, useContext, useState } from "react";

export const CodeContext = createContext();

export function CodeProvider({ children }) {
  const [command, setCommand] = useState("");
  const data = {
    command,
    setCommand,
  };
  return <CodeContext.Provider value={data}>{children}</CodeContext.Provider>;
}
export const useCodeContext = () => useContext(CodeContext);
