import { PdfCvContext, usePdfCvContext } from "../../../../contexts/PdfCvProvider";

export default function Language() {
    const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
           <div className="text-darky font-bold !pb-0 pt-4 border-b-[3px] border-darky text-[20px]">
          LANGUAGE
          </div>
          {item?.language?.map((lang) => (
            <div>
              <div
                key={lang?.id}
                className="text-darky font-[900] text-[17px] !pb-0 !pt-0"
              >
                <div>{lang?.title} </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}