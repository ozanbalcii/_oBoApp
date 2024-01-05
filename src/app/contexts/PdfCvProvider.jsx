import { createContext, useContext, useEffect, useState } from "react";
import { getOzanBalciInfos } from "../pages/applications/pdfCv/services";

export const PdfCvContext = createContext();

export const PdfCvProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();

  const fetchGetPdfCvData = async () => {
    try {
      setLoading(true);
      const person = await getOzanBalciInfos();
      const result = person?.data?.map((item) => ({
        personalInfo: item?.personalInfo?.map((value) => ({
          id: value?.id,
          phone: value?.phone ? value?.phone : "-",
          mail: value?.mail ? value?.mail : "-",
          address: value?.address ? value?.address : "-",
          dateOfBirth: value?.dateOfBirth ? value?.dateOfBirth : "-",
          website1: value?.website1 ? value?.website1 : "-",
          website2: value?.website2 ? value?.website2 : "-",
        })),
        summary: item?.summary?.map((sum) => ({
          id: sum?.id,
          nameSurname: sum?.nameSurname ? sum?.nameSurname : "-",
          jobTitle: sum?.jobTitle ? sum?.jobTitle : "-",
          text: sum?.text ? sum?.text : "-",
        })),
        education: item?.education?.map((edu) => ({
          id: edu?.id,
          school: edu?.school ? edu?.school : "-",
          job: edu?.job ? edu?.job : "-",
          graduationDate: edu?.graduationDate ? edu?.graduationDate : "-",
        })),
        workExperience: item?.workExperience?.map((wor) => ({
          id: wor?.id,
          job: wor?.job ? wor?.job : "-",
          company: wor?.company ? wor?.company : "-",
          date: wor?.date ? wor?.date : "-",
          desc: wor?.desc ? wor?.desc : "",
        })),
        skills: item?.skills?.map((skill) => ({
          id: skill?.id,
          title: skill?.title ? skill?.title : "-",
        })),
        certificates: item?.certificates?.map((cert) => ({
          id: cert?.id,
          title: cert?.title ? cert?.title : "-",
          company: cert?.company ? cert?.company : "-",
          date: cert?.date ? cert?.date : "-",
        })),
        language: item?.language?.map((lang) => ({
          id: lang?.id,
          title: lang?.title ? lang?.title : "-",
        })),
        hobbies: item?.hobbies?.map((hob) => ({
          id: hob?.id,
          text: hob?.text ? hob?.text : "-",
        })),
        references: item?.references?.map((ref) => ({
          id: ref?.id,
          nameSurname: ref?.nameSurname ? ref?.nameSurname : "-",
          jobTitle: ref?.jobTitle ? ref?.jobTitle : "-",
        })),
        projects: item?.projects?.map((proj) => ({
          id: proj?.id,
          title: proj?.title ? proj?.title : "-",
        })),
        projectsInfo: item?.projectsInfo?.map((projInfo) => ({
          id: projInfo?.id,
          text1: projInfo?.text1 ? projInfo?.text1 : "-",
          text2: projInfo?.text2 ? projInfo?.text2 : "-",
        })),
      }));
      setInfo(result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGetPdfCvData();
  }, []);

  const data = {
    loading,
    info,
  };

  return <PdfCvContext.Provider value={data}>{children}</PdfCvContext.Provider>;
};
export const usePdfCvContext = () => useContext(PdfCvContext);
