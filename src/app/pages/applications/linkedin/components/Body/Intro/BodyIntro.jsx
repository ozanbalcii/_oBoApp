import { useEffect } from "react";
import {
  BodyIntroContext,
  useBodyIntroContext,
} from "../../../../../../contexts/LinkedinPage/BodyIntroProvider";
import { getLinkedinUsersData } from "../../../services/index";
export default function BodyIntro() {
  const {
    userName,
    setUserName,
    loading,
    setLoading,
    mainDataOfUser,
    setMainDataOfUser,
  } = useBodyIntroContext(BodyIntroContext);

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
              currentCompanyPhoto: item?.currentCompanyPhoto
                ? item?.currentCompanyPhoto
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
  console.log(
    mainDataOfUser.map((data) => data.name_surname),
    "mainDataOfUser"
  );

  useEffect(() => {
    fetchGetLinkedinUsersData();
  }, []);
  return (
    <>
      {mainDataOfUser.map((data) => (
        <>
          <div className="bg-profileBg w-[623px] h-[201px] rounded-[0.395rem] relative">
            <div className="rounded-full  absolute -bottom-6 left-4 p-4 w-[120px] h-[120px] bg-gray-500 "></div>
          </div>
          <div className="grid grid-cols-12 bg-white pt-10 p-4">
            <div className="col-span-6 font-bold text-lg">
              <div>{data.name_surname}</div>
              <div>{data.job}</div>
            </div>
            <div className="col-span-6">gdfdfd</div>
          </div>
        </>
      ))}
    </>
  );
}
