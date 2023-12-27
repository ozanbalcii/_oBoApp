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




  const fetchGetLinkedinUsersData = async (limit = 3) => {
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
              post: item?.post ? item?.post : "-",
              followers: item?.followers ? item?.followers : "-",
              allActivity: item?.allActivity?.map((value) => ({
                activityPost: value?.activityPost ? value?.activityPost : "-",
                desc: value?.desc ? value?.desc : "-",
                skills: value?.skills ? value?.skills : "-",
              })),
              experience: item?.experience?.map((exp) => ({
                id: exp?.id ? exp?.id : "Error: Id is doesn't exist",
                title: exp?.title ? exp?.title : "-",
                photo: exp?.photo
                  ? exp?.photo
                  : "Error: Photo is doesn't exist",
                company: exp?.company ? exp?.company : "-",
                date: exp?.date ? exp?.date : "-",
                desc: exp?.desc ? exp?.desc : "-",
              })),
              education: item?.education?.map((edu) => ({
                id: edu?.id ? edu?.id : "Error: Id is doesn't exist",
                info: edu?.info ? edu?.info : "-",
                picture: edu?.picture
                  ? edu?.picture
                  : "Error: picture is doesn't exist",
                name: edu?.name ? edu?.name : "-",
                activities: edu?.activities ? edu?.activities : "-",
                date: edu?.date ? edu?.date : "-",
              })),
              licenses_certifications: item?.licenses_certifications?.map((lc) => ({
                id: lc?.id ? lc?.id : "Error: Id is doesn't exist",
                title: lc?.title ? lc?.title : "-",
                picture: lc?.picture
                  ? lc?.picture
                  : "Error: picture is doesn't exist",
                company: lc?.company ? lc?.company : "-",
                date: lc?.date ? lc?.date : "-",
              })),
              skills: item?.skills?.map((sk) => ({
                id: sk?.id ? sk?.id : "Error: Id is doesn't exist",
                title: sk?.title ? sk?.title : "-",
                picture: sk?.picture
                  ? sk?.picture
                  : "Error: picture is doesn't exist",
                job: sk?.job ? sk?.job : "-",
                endorsements: sk?.endorsements ? sk?.endorsements : "-",
              })),
              languages: item?.languages?.map((lang) => ({
                id: lang?.id ? lang?.id : "Error: Id is doesn't exist",
                title: lang?.title ? lang?.title : "-",
                level: lang?.level ? lang?.level : "-",
            
              })),

              // interests:  item?.interests?.map((int) => (
              //  int?.companies?.map((comp) => ({
              //   id: comp?.id ? comp?.id : "Error: Id is doesn't exist",
              //   name: comp?.name ? comp?.name : "-",
              //   picture: comp?.picture
              //     ? comp?.picture
              //     : "Error: picture is doesn't exist",
              //   followers: comp?.followers ? comp?.followers : "-",
              //  })),
              //  int?.groups?.map((gr) => ({
              //   id: gr?.id ? gr?.id : "Error: Id is doesn't exist",
              //   name: gr?.name ? gr?.name : "-",
              //   picture: gr?.picture
              //     ? gr?.picture
              //     : "Error: picture is doesn't exist",
              //   followers: gr?.followers ? gr?.followers : "-",
              //  }))
              // )),
              
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