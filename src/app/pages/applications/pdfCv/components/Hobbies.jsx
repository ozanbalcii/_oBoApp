import { PdfCvContext, usePdfCvContext } from "../../../../contexts/PdfCvProvider";

export default function Hobbies() {
    const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
           <div className="text-darky font-bold !pb-0 pt-4 border-b-[3px] border-darky text-[20px]">
          HOBBIES
          </div>
          {item?.hobbies?.map((hob) => (
            <div>
              <div
                key={hob?.id}
                className="text-darky font-[900] text-[17px] !pb-0 !pt-0"
              >
                <div>{hob?.text} </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}