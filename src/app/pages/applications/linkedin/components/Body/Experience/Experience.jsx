import SVG from "../../../../../../assets/svg/SVG";
import ReadMoreButton from "../../../../../../components/common/ReadmoreButton/ReadMoreButton";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function Experience() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  const longTextArray = mainDataOfUser?.flatMap((data) => data?.experience?.map((exp) => exp?.desc));
const longText = longTextArray ? longTextArray.join(' ') : '';

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-2">
            <div className="bg-white border-[0.1rem] text-darky rounded-[0.495rem] p-5">
              <div className="font-bold text-[20px] pb-2">Experience</div>
              <div className="grid grid-cols-12">
                {data?.experience?.map((exp) => (
                  <>
                    <div className="col-span-1 xl:hidden 2xl:flex md:hidden">
                      <img
                        src={exp?.photo}
                        alt="linkedin-company-picture"
                        className="fill  w-[45px] h-[45px] cursor-pointer"
                      />
                    </div>
                    <div className="col-span-11 pt-1 pb-3 pl-2 border-b border-gray-300">
                      <div className="font-bold">{exp?.title}</div>
                      <div className="text-[14px]">{exp?.company}</div>
                      <div className="text-[14px] text-gray-700">
                        {exp?.date}
                      </div>
                      <div className="text-[14px] ">
                        <ReadMoreButton text={longText} maxLength={99} />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
