import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();


export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const data = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  );
}
export const useLoadingContext = () => useContext(LoadingContext);
