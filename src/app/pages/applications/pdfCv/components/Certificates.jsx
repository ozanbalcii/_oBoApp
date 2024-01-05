import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function Certificates() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
          <div className="text-darky font-bold !pb-0 pt-4 border-b-[3px] border-darky text-[20px]">
            CERTIFICATES
          </div>
          {item?.certificates?.map((cert) => (
            <div className="">
              <div
                key={cert?.id}
                className="text-darky font-[500] text-[16px] !pb-0 !pt-0"
              >
                <div className="flex gap-5">
                  <div>
                    <div> {cert?.title} </div>
                  </div>
                  <div className="font-bold 2xl:flex hidden">{cert?.date} </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
