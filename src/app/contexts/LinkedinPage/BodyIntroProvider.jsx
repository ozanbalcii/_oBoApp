import React from "react";
import { createContext, useContext, useState } from "react";

export const BodyIntroContext = createContext();

export const BodyIntroProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mainDataOfUser, setMainDataOfUser] = useState();
  const [userName, setUserName] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyPage, setCompanyPage] = useState();
  const [job, setJob] = useState();
  const [location, setLocation] = useState();
  const [connections, setConnections] = useState();

  const data = {
    loading,
    setLoading,
    mainDataOfUser,
    setMainDataOfUser,
    userName,
    setUserName,
    companyName,
    setCompanyName,
    companyPage,
    setCompanyPage,
    job,
    setJob,
    location,
    setLocation,
    connections,
    setConnections,
  };
  return (
    <BodyIntroContext.Provider value={data}>
      {children}
    </BodyIntroContext.Provider>
  );
};
export const useBodyIntroContext = () => useContext(BodyIntroContext);
