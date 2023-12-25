import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { getLinkedinUsersData } from "../pages/applications/linkedin/services";

export const LinkedinPageDataContext = createContext();

export const LinkedinPageProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mainDataOfUser, setMainDataOfUser] = useState();
  const [userName, setUserName] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyPage, setCompanyPage] = useState();
  const [job, setJob] = useState();
  const [location, setLocation] = useState();
  const [connections, setConnections] = useState();

  const fetchGetLinkedinUsersData = async () => {
    try {
      setLoading(true);
      const users = await getLinkedinUsersData();
      const filteredUsers = users?.data
        ?.map((item) => {
          if (item.userId === "0") {
            return {
              name_surname: item?.name_surname ? item?.name_surname : "-",
              job: item?.job ? item?.job : "-",
              location: item?.location ? item?.location : "-",
              connections: item?.connections ? item?.connections : "-",
              currentCompany: item?.currentCompany ? item?.currentCompany : "-",
              about: item?.about ? item?.about : "-",
              allActivity: item?.allActivity.skills,
              
              currentCompanyPhoto: item?.currentCompanyPhoto
                ? item?.currentCompanyPhoto
                : "???",
              photo: item?.photo ? item?.photo : "???",
              profileBackground: item?.profileBackground
                ? item?.profileBackground
                : "???",
            
            };
          }
          return null;
        })
        .filter(Boolean);
      setMainDataOfUser(filteredUsers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetLinkedinUsersData();
  }, []);


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
      <LinkedinPageDataContext.Provider value={data}>
        {children}
      </LinkedinPageDataContext.Provider>
  );
};
export const useLinkedinPageDataContext = () =>
  useContext(LinkedinPageDataContext);
