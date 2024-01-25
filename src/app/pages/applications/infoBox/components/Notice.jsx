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
  console.log(infoBox, "infoBox");
  return (
    <div className="bg-[#2a210b] rounded-md p-3 text-gray-400">
      {infoBox?.map((item) => (
        <ul key={item?.id}>
          {item?.notice?.map((noti) => (
            <>
              <div key={noti?.id}>
                <li>{noti?.frontendText}</li>
                <li className="pt-2">{noti?.backendText}</li>
                <li className="pt-2">{noti?.finallyText}</li>
              </div>
            </>
          ))}
        </ul>
      ))}
    </div>
  );
}
