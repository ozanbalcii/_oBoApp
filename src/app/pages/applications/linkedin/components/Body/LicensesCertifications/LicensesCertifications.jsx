import SVG from "../../../../../../assets/svg/SVG";
import Button from "../../../../../../components/common/Button";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function LicensesCertifications() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="bg-white border-[0.1rem] pt-2 rounded-[0.495rem]">
            <div className=" text-darky pr-6 pl-6 pt-">
              <div className="font-bold text-[20px] pb-2">
                Licenses & certifications
              </div>
              <div className="grid grid-cols-12">
                {data?.licenses_certifications?.map((exp) => (
                  <>
                    <div className="col-span-1 xl:hidden 2xl:flex md:hidden">
                      <img
                        src={exp?.picture}
                        alt="linkedin-company-picture"
                        className="fill  w-[45px] h-[45px] cursor-pointer"
                      />
                    </div>
                    <div className="col-span-11 pb-4 pt-2 pl-2 border-b border-gray-300">
                      <div className="font-bold">{exp?.title}</div>
                      <div className="text-[14px]">{exp?.company}</div>
                      <div className="text-[14px] text-gray-700">
                        {exp?.date}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <Button
              size={15}
              className="text-gray-500 w-full h-full font-[600] hover:bg-gray-200 transition-all p-2 gap-1"
            >
              Show all licenses & certifications
              <SVG
                icon="arrow-right2"
                className="rounded-md font-bold transition-all "
                size={15.5}
              />
            </Button>
          </div>
        </>
      ))}
    </>
  );
}
