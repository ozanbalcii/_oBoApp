import { createContext, useContext, useState, useEffect } from "react";
import { getExtensionsData } from "../../pages/applications/vsCode/services/index";

export const ExtensionsContext = createContext();

export default function ExtensionsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [extensionsData, setExtensionsData] = useState();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const fetchExtensionsData = async () => {
    try {
      setLoading(true);
      const ext = await getExtensionsData();
      const res = ext?.data?.map((item) => ({
        id: item.id ? item.id : "Error: Id is doesn't exist",
        picture: item?.picture ? item?.picture : "-",
        name: item?.name ? item?.name : "-",
        desc: item?.desc ? item?.desc : "-",
        time: item?.time ? item?.time : "-",
        producer: item?.producer ? item?.producer : "-",
      }));
      setExtensionsData(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchExtensionsData();
  }, []);

  const data = {
    loading,
    extensionsData,
    handleToggle,
    toggle,
  };
  return (
    <ExtensionsContext.Provider value={data}>
      {children}
    </ExtensionsContext.Provider>
  );
}

export const useExtensionsContext = () => useContext(ExtensionsContext);
