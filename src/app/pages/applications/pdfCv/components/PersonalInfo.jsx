import React from "react";
import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";
import SVG from "../../../../assets/svg/SVG";

export default function PersonalInfo() {
  const { loading, info } = usePdfCvContext(PdfCvContext);

  return (
    <>
      {info?.map((item) => (
        <div className=" CVborder grid grid-cols-12 p-4 !pb-0">
          <div className="col-span-4 p-4">
            <div className="text-darky font-bold text-[20px]">
              PERSONAL INFO
            </div>
            <hr className="text-black [4px]" />

            <>
              {item?.personalInfo?.map((data) => (
                <>
                  <div key={data?.id} className="flex gap-3 items-center pt-3">
                    <div>
                      <SVG icon="phone" size={17} />
                    </div>
                    <div className="text-[17px] pt-[3px] font-normal">
                      <div>{data?.phone}</div>
                    </div>
                  </div>
                  <div key={data?.id} className="flex gap-3 items-center pt-3">
                    <div>
                      <SVG icon="envelop" size={17} />
                    </div>
                    <div className="text-[17px] pt-[3px] font-normal">
                      <div>{data?.mail}</div>
                    </div>
                  </div>
                  <div key={data?.id} className="flex gap-3 items-center pt-3">
                    <div>
                      <SVG icon="laptop" size={17} />
                    </div>
                    <div className="text-[14px] pt-[3px]  font-normal">
                      <a
                        className="hover:underline pr-2"
                        href={`${data?.website1}`}
                        target="_blank"
                      >
                        {data?.website1}
                      </a>
                      <a
                        className="hover:underline"
                        href={`${data?.website2}`}
                        target="_blank"
                      >
                        {data?.website2}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center pt-3">
                    <div>
                      <SVG icon="location" size={17} />
                    </div>
                    <div className="text-[17px] pt-[3px] font-normal">
                      <div>{data?.address}</div>
                    </div>
                  </div>
                  <div className="flex text-[17px] gap-1 items-center pt-3">
                    <div className="font-bold  ">Date of birth:</div>
                    <div className=" pt-[3px] font-normal">
                      <div>{data?.dateOfBirth}</div>
                    </div>
               
                  </div>
                </>
              ))}
            </>
          </div>
          <div className="col-span-8 pt-4 bg-[#EAEBEC] pl-5">
            {item?.summary?.map((sum) => (
              <div>
                <div
                  key={sum?.id}
                  className="text-darky font-[300] text-[50px] pl-5 !pb-0 !pt-0"
                >
                  <div>{sum?.nameSurname} </div>
                  <div className="text-[19px] pl-2 ">{sum?.jobTitle}</div>
                  <div className="text-[15px] pl-2 pr-2 pt-3 text-darky ">
                    {sum?.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
