import React from "react";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";
import SVG from "../../../../../../assets/svg/SVG";
import Button from "../../../../../../components/common/Button/index";

export default function Activity() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );
  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-2">
            <div className="bg-white border-[0.1rem] text-darky rounded-[0.495rem] pt-6">
              <div className="pl-5 pr-5">
                <div className="font-bold text-[20px] ">Activity</div>
                <div className=" text-sm font-normal">{data?.followers}</div>
                <div className="pt-[0.70rem] pb-1">
                  <div className="font-bold text-[10px] lg:text-[15px]">
                    Ozan hasn’t posted yet
                  </div>
                  <div className=" text-sm font-medium text-[13px] lg:text-sm pb-4">
                    Recent posts Ozan shares will be displayed here.
                  </div>
                </div>
              </div>
              <Button
                size={15}
                className="text-gray-500 border-t w-full h-full font-[600]  hover:bg-gray-200 transition-all pt-2 pb-2 gap-1"
              >
                Show all activity{" "}
                <SVG
                  icon="arrow-right2"
                  className="rounded-md font-bold transition-all "
                  size={15.5}
                />
              </Button>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
