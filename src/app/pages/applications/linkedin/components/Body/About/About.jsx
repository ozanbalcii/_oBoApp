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
              <div className="pl-5 text-sm font-normal">{data?.about}</div>
              <div className="pt-5 pl-5">
                <div className=" border rounded-md ">
                  <div className="flex items-center justify-start p-2 gap-2">
                    <div>
                      <SVG
                        icon="diamond"
                        className="rounded-md font-bold transition-all"
                        size={20}
                      />
                    </div>
                    <div className="font-bold text-[15px]">Top Skills</div>
                  </div>
                  <div className="p-2">
                    <div>
                      {console.log(data?.contactInfo)}
                    {data?.allActivity?.skills}
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
