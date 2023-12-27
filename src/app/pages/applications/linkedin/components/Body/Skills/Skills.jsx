import SVG from "../../../../../../assets/svg/SVG";
import Button from "../../../../../../components/common/Button";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";

export default function Skills() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <div className="pt-2">
          <div className="pt-5 bg-white border-[0.1rem] rounded-[0.495rem]">
            <div className=" text-darky pr-6 pl-6 ">
              <div className="font-bold text-[20px] pb-2">Skills</div>
              {data?.skills?.map((sk) => (
                <>
                  {["0", "1", "2"].includes(sk.id) && (
                    <>
                      <div className="border-b">
                        <div className="pb-2 font-bold pt-2">{sk?.title}</div>
                        <div>
                          <div className=" xl:hidden 2xl:flex md:hidden pt-1 ">
                            <img
                              src={sk?.picture}
                              alt="linkedin-company-picture"
                              className="fill  w-[20px] h-[20px] cursor-pointer"
                            />
                            <div className="pl-3 text-[15px] font-[500]"> {sk?.job}</div>
                          </div>
                          <div className="flex items-center">
                              <SVG
                                icon="people"
                                className="rounded-md font-bold transition-all"
                                size={22.5}
                              />
                            <Button className="font-normal text-[14.5px] p-4 hover:underline hover:text-blue-600">
                              {sk?.endorsements}
                            </Button>
                          </div>
                         <div className="pt-3 pb-3">
                         <Button className="font-normal text-[14.5px] border border-gray-700 rounded-[7rem] p-1  hover:border-darky hover:bg-slate-300">
                            Endorse
                            </Button>
                         </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
            <Button
              size={15}
              className="text-gray-500  w-full h-full font-[600] hover:bg-gray-200 transition-all p-2 gap-1"
            >
              Show all skills
              <SVG
                icon="arrow-right2"
                className="rounded-md font-bold transition-all"
                size={15.5}
              />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
