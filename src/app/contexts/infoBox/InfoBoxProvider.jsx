import { createContext, useContext, useEffect, useState } from "react";
import { getInfoBoxData } from "../../pages/applications/infoBox/services";
export const InfoBoxContext = createContext();
export default function InfoBoxProvider({ children }) {
  const [infoBox, setInfoBox] = useState();

  const fetchInfoBoxData = async () => {
    const response = await getInfoBoxData();
    const result = response?.data?.map((item) => ({
      notice: item?.notice?.map((noti) => ({
        id: noti?.id,
        frontendText: noti?.frontendText ? noti?.frontendText : "-",
        backendText: noti?.backendText ? noti?.backendText : "-",
        finallyText: noti?.finallyText ? noti?.finallyText : "-",

      })),
      infoWeb: item?.infoWeb?.map((inf) => ({
        id: inf?.id,
        article1: inf?.article1 ? inf?.article1 : "-",
        article2: inf?.article2 ? inf?.article2 : "-",
      })),
    }));
    setInfoBox(result);
  };
  useEffect(() => {
    fetchInfoBoxData();
  }, []);

  const data = {
    infoBox
  }

  return (
    <InfoBoxContext.Provider value={data}>{children}</InfoBoxContext.Provider>
  );
}
export const useInfoBoxContext = () => useContext(InfoBoxContext);
