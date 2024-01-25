import React from "react";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../../contexts/trashContexts/AppOpenClose";
import {
  InfoBoxContext,
  useInfoBoxContext,
} from "../../../../contexts/infoBox/InfoBoxProvider";

export default function InfoWeb() {
  const { infoBox } = useInfoBoxContext(InfoBoxContext);
console.log(infoBox, 'infoBox')
  return (
    <div className="bg-[#2a210b] rounded-md ">
      <div className="p-2 text-gray-400 ">
        {infoBox?.map((item) => {
          item?.notice?.map((noti) => (
            <div key={noti?.id}>
              {noti?.text}
            </div>
          ));
        })}
      </div>
    </div>
  );
}
