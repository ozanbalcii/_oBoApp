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
        text: noti?.text ? noti?.text : "-",
      })),
      infoWeb: item?.infoWeb?.map((inf) => ({
        id: inf?.id,
        text: inf?.text ? inf?.text : "-",
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
