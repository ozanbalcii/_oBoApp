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
          <hr />
          <div className=" !pb-0 ">
            <div>
              {item?.workExperience?.map((edu) => (
                <>
                  <div key={edu?.id} className="flex-col">
                    <div className="flex gap-5 pt-1 ">
                      <div>
                       <div className="flex gap-5">
                        <div>
                        <div className="pt-2">{edu?.job}</div>
                        </div>
                        <div>
                        <div className="pt-[8px]">{edu?.date}</div>

                        </div>
                       </div>
                        <div className="font-bold pb-2 border-b-[1px] border-darky">
                          {edu?.company}
                        </div>
                        <div className="font-bold pt-1">{edu?.desc}</div>
                      </div>
                      <div>
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
