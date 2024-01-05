import React from "react";
import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function Education() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <div className="pt-4">
          <div className="text-darky font-bold !pb-0 border-b-[3px] border-darky text-[20px]">
            EDUCATION
          </div>
          <div className=" !pb-0 ">
            <div>
              {item?.education?.map((edu) => (
                <>
                  <div key={edu?.id} className="flex-col">
                    <div>{edu?.school}</div>
                    <div>{edu?.job}</div>
                    <div>{edu?.graduationDate}</div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
