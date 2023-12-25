import SVG from "../../../../../../assets/svg/SVG";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function Experience() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );
  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-5">
            <div className="bg-white text-darky rounded-[0.395rem] p-5">
              <div className="font-bold text-[20px] pb-2">Experience</div>
              <div className="grid grid-cols-12">
                {data?.experience?.map((exp) => (
                  <>
                    <div className="col-span-1">
                      <img
                        src={exp?.photo}
                        alt="linkedin-profile-picture"
                        className="fill  w-[45px] h-[45px] cursor-pointer"
                      />
                    </div>
                    <div className="col-span-11 pb-2 pl-2 border-b border-gray-300">
                      <div className="font-bold">{exp?.title}</div>
                      <div className="text-[14px]">{exp?.company}</div>
                      <div className="text-[14px] text-gray-700">
                        {exp?.date}
                      </div>
                      <div className="text-[14px]  line-clamp-3">
                        {exp?.desc}
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
