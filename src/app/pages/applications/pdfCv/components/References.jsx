import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function References() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
          <div className="text-darky font-bold !pb-0 pt-4 border-b-[3px] border-darky text-[20px]">
            REFERENCES
          </div>
          {item?.references?.map((ref) => (
            <div>
              <div key={ref?.id} className="text-darky text-[17px] !pb-0 !pt-0">
                <div className="flex gap-3">
                  <div className="font-[900]">{ref?.nameSurname} </div>
                  <div className="font-[400]">{ref?.jobTitle} </div>
                </div>
              </div>
            </div>
          ))}
          <div className="font-bold text-[15px] pt-2">
            A number will be provided if necessary.
          </div>
        </>
      ))}
    </>
  );
}
