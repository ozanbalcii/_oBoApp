import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function WorkExperience() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <div className="!pb-0 pt-4 ">
          <div className="text-darky font-bold !pb-0 border-b-[3px] border-darky text-[20px]">
            WORK EXPERIENCE
          </div>
          <div className=" !pb-0 ">
            <div>
              {item?.workExperience?.map((edu) => (
                <>
                  <div key={edu?.id} className="flex-col">
                    <div className="flex gap-5 pt-1 ">
                      <div>

                        <div className="flex gap-5 items-center pb-2    border-darky">
                          <div className="font-bold ">
                            {edu?.company}
                          </div>
                          <div>
                            <div className="">{edu?.job}</div>
                          </div>
                          <div>
                            <div className="">{edu?.date}</div>
                          </div>
                        </div>
                        <div className="font-bold pt-2 border-b-2 border-darky pb-2 ">{edu?.desc}</div>
                      </div>
                    </div>
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
