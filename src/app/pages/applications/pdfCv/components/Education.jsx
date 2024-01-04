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
        <div className=" CVborder p-4 !pb-0 ">
          <div className="text-darky font-bold p-4 !pb-0  text-[20px]">
            PERSONAL INFO
          </div>
          <hr />
          <div className="p-4 !pb-0 ">
            <div>
              {item?.education?.map((edu) => (
                <>
                  <div key={edu?.id} className="flex-col">
                    <div>{edu?.school}</div>
                    <div>{edu?.job}</div>
                    <div className="">{edu?.graduationDate}</div>
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
