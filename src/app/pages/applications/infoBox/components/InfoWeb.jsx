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
  const { handleButtonNotice } = useAppOpenCloseContext(AppOpenCloseContext);
  const { infoBox } = useInfoBoxContext(InfoBoxContext);

  return (
    <div className="bg-[#2a210b] rounded-md ">
        
      <div className="p-2 text-gray-400 ">
        {infoBox?.map((item) => {
          item?.infoWeb?.map((data) => (
            <div key={data?.id}>
              {data?.text}
            </div>
          ));
        })}
      </div>
    </div>
  );
}
