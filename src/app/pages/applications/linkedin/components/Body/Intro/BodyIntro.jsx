import { useEffect } from "react";
import Button from "../../../../../../components/common/Button/index";
import {
  BodyIntroContext,
  useBodyIntroContext,
} from "../../../../../../contexts/LinkedinPage/BodyIntroProvider";
import { getLinkedinUsersData } from "../../../services/index";
import SVG from "../../../../../../assets/svg/SVG";
import xd from "../../../../../../assets/LinkedinPagePhoto/currentCompany.png";
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
  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="relative">
            <img
              src={data?.profileBackground}
              alt="linkedin-profile-background"
              className=" w-[623px] h-[201px] rounded-[0.395rem] "
            />
            <img
              src={data?.photo}
              alt="linkedin-profile-picture"
              className="rounded-full fill absolute -bottom-9 left-4 p-4 w-[140px] h-[140px] "
            />
          </div>
          <div className="grid grid-cols-2 bg-white pt-10 p-4 ">
            <div className="col-span-1 ">
              <div className="flex items-center gap-2">
                <h1 className="text-xl  font-bold">{data?.name_surname} </h1>
                <span className="text-xs font-normal">1st</span>
              </div>
              <div className="font-normal">
                <div>{data?.job}</div>
                <div className="flex items-center pt-1">
                  <div className="text-sm text-gray-500 ">{data?.location}</div>
                  <Button className="text-xs text-blue-700 hover:underline ">
                    Contact Info
                  </Button>
                </div>
                <div>
                  <Button className="text-xs font-bold text-blue-700 hover:underline pt-1 pl-0 ">
                    {data?.connections}
                  </Button>
                </div>
                <div className=" flex items-center pt-3 p-0 gap-2 transition-all">
                  <Button className="rounded-[2rem] bg-[#0B65C2] text-white text-xs font-bold hover:bg-blue-900 w-[6.95rem] h-[2rem] flex items-center justify-center gap-2 ">
                    <SVG icon="paper-send" size={14} />
                    <span className="text-center text-[14.5px]">Message</span>
                  </Button>
                  <Button className="rounded-[2rem] text-center text-[14.5px] p-0 bg-[#fff] text-darky border border-gray-600 hover:border-[1px] hover:border-darky text-xs font-bold hover:bg-neutral-200 w-[5.4.5rem] h-[2rem] flex items-center justify-center  ">
                    More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 pl-20 pt-4">
              <div className="flex items-center gap-2">
                <img
                  src={data?.currentCompanyPhoto}
                  alt="current company"
                  className="h-[32px] w-[32px] cursor-pointer object-cover"
                />
                <div className="font-bold text-sm">{data.currentCompany}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
