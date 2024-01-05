import { PdfCvContext, usePdfCvContext } from "../../../../contexts/PdfCvProvider";

export default function Summary() {
    const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
          {item?.summary?.map((sum) => (
            <div>
              <div
                key={sum?.id}
                className="text-darky font-[300] text-[50px] !pb-0 !pt-0"
              >
                <div>{sum?.nameSurname} </div>
                <div className="text-[21px] font-[600]">{sum?.jobTitle}</div>
                <div className="text-[15px] font-[500] pr-2 pt-3 text-darky">
                  {sum?.text}
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}