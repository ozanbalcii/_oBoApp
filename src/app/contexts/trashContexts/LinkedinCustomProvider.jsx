import { createContext, useContext, useState, useEffect } from "react";
import { getLinkedinCustomData } from "../../pages/applications/linkedin/services";


export const LinkedinCustomDataContext = createContext();


export function LinkedinCustomProvider({children}) {
    const[loading, setLoading] = useState(false);
    const[customData, setCustomData] = useState();

    const fetchGetLinkedinCustom = async () => {
        try {
            setLoading(true);
            const custom = await getLinkedinCustomData();
            const result = custom?.data?.map((value) =>({
              peopleAlsoViewed: value?.peopleAlsoViewed?.map((user) => ({
                picture: user?.picture ? user?.picture : "-",
                userNameSurname: user?.userNameSurname ? user?.userNameSurname : "-",
                job: user?.job ? user?.job : "-",
                // mutual: user?.mutual ? user?.mutual : "-",
                // connections: user?.connections ? user?.connections : "-",
              })),
              peopleYouMayKnow: value?.peopleYouMayKnow?.map((peo) => ({
                picture: peo?.picture ? peo?.picture : "-",
                userNameSurname: peo?.userNameSurname ? peo?.userNameSurname : "-",
                job: peo?.job ? peo?.job : "-",
              })),
              promotions: value?.promotions?.map((promo) => ({
                picture: promo?.picture ? promo?.picture : "-",
                id: promo?.id ? promo?.id : "-",
              })),
            }))
            setCustomData(result)
        } catch (error) {
            console.error(error);
          }
          finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        fetchGetLinkedinCustom();
      }, []);


    const data = {
        loading,
        customData,
    }

  return (
    <LinkedinCustomDataContext.Provider value={data}>
    {children}
    </LinkedinCustomDataContext.Provider>
  )
}
export const useLinkedinCustomDataContext = () => useContext(LinkedinCustomDataContext);
