import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function Skills() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <div className="pb-4">
          <div className="text-darky font-bold pt-4 border-b-[3px]  border-darky text-[20px]">
            SKILLS
          </div>
          {item?.skills?.map((sk) => (
            <div>
              <div
                key={sk?.id}
                className="text-darky font-[900] text-[17px] !pb-0 !pt-0"
              >
                <div>{sk?.title} </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
