import React from "react";
import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";
import SVG from "../../../../assets/svg/SVG";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Summary from "./Summary";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Language from "./Language";
import Hobbies from "./Hobbies";
import References from "./References";
import Projects from "./Projects";

export default function Pdf() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <div className="CVborder grid grid-cols-12 p-4 !pb-0">
          <div className="col-span-4 p-4">
            <div className="text-darky font-bold border-b-[3px] border-darky text-[20px]">
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
                      <a href={`mailto:${data?.mail}`}>{data?.mail}</a>
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
                    <div className="  font-normal">
                    {data?.dateOfBirth}
                    </div>
                  </div>
                </>
              ))}
              <Education />
              <Skills />
              <Certificates />
              <Language />
              <Hobbies />
              <References />
            </>
          </div>
          <div className="col-span-8 p-5 pr-[100px] bg-[#EAEBEC]">
            <Summary />
            <WorkExperience />
            <Projects />
          </div>
        </div>
      ))}
    </>
  );
}
