import { useEffect } from "react";
import Button from "../../../../../../components/common/Button/index";
import { LinkedinPageDataContext, useLinkedinPageDataContext } from "../../../../../../contexts/LinkedinPageProvider";
import { getLinkedinUsersData } from "../../../services/index";
import SVG from "../../../../../../assets/svg/SVG";

export default function BodyIntro() {

  const {
    mainDataOfUser,
  } = useLinkedinPageDataContext(LinkedinPageDataContext);


 

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
          <div className="bg-white pt-10 p-4">
            <div className="flex justify-end ">
              <Button
                icon={
                  <SVG
                    icon="bell"
                    className="rounded-md font-bold transition-all hover:bg-gray-500 hover:rounded-full"
                    size={20.5}
                  />
                }
                className="w-[14px] h-[9px] text-darky "
              />
            </div>
            <div className="flex items-center  justify-between gap-2">
              <div className="text-xl  font-bold">
                {data?.name_surname}
                <span className="text-xs font-normal">1st</span>
              </div>
              <div className="flex items-center justify-end pr-[100px] md:hidden xl:flex ">
                <div className="h-[32px] w-[32px] ">
                  <img
                    src={data?.currentCompanyPhoto}
                    alt="current company"
                    className="h-full w-full cursor-pointer object-cover "
                  />
                </div>
                <div className="ml-2 text-sm font-bold ">
                  {data.currentCompany}
                </div>
              </div>
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
                <Button className="text-xs font-bold text-blue-700 hover:underline pt-1 pl-0  md:hidden xl:flex">
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
         
        </>
      ))}
    </>
  );
}
