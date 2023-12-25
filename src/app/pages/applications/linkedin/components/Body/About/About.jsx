import { useEffect } from "react";
import { getLinkedinUsersData } from "../../../services";
import SVG from "../../../../../../assets/svg/SVG";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function About() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );
  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-5">
            <div className="bg-white text-darky rounded-[0.395rem] p-6">
              <div className="font-bold text-[20px] pb-2">About</div>
              <div className=" text-sm font-normal">{data?.about}</div>
              <div className="pt-5">
                <div className="border rounded-md ">
                  <div className="flex">
                    <div className=" p-3 gap-2">
                      <SVG
                        icon="diamond"
                        className="rounded-md font-bold transition-all"
                        size={20}
                      />
                    </div>
                    <div className="pt-[0.90rem] pb-5">
                      <div className="font-bold text-[14px] lg:text-xl">Top Skills</div>
                      <div className=" text-sm font-medium text-[13px] lg:text-sm">
                        {data?.allActivity?.map((value) => value.skills)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
