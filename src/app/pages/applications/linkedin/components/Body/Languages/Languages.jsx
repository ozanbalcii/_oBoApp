import SVG from "../../../../../../assets/svg/SVG";
import Button from "../../../../../../components/common/Button";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function Languages() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );
  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-2 pb-2">
            <div className="bg-white border-[0.1rem] text-darky rounded-[0.495rem] pt-6">
              <div className="pl-5 pr-5">
                <div className="font-bold text-[20px] ">Languages</div>

                {data?.languages?.map((lang) => (
                  <>
                    <div className=" text-md font-bold pt-2 ">
                      {lang?.title}
                    </div>

                    <div className="pt-[0.20rem] pb-3">
                      <div className="font-normal text-[10px] text-gray-700  border-gray-200 pb-1 lg:text-[15px]">
                        {lang?.level}
                      </div>
                    </div>
                    <hr/>
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
