import Button from "../../../../../../components/common/Button/index";
import {
  LinkedinPageDataContext,
  useLinkedinPageDataContext,
} from "../../../../../../contexts/LinkedinPageProvider";
import SVG from "../../../../../../assets/svg/SVG";

export default function BodyIntro() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="relative">
            <img
              src={data?.profileBackground}
              alt="linkedin-profile-background"
              className=" w-[622px] h-[201px] rounded-t-[0.395rem] "
            />
            <img
              src={data?.photo}
              alt="linkedin-profile-picture"
              className="rounded-full fill absolute -bottom-9 left-4 p-4 w-[140px] h-[140px] "
            />
          </div>

          <div className="bg-white grid grid-cols-10 rounded-b-xl border-[0.1rem] pt-10 p-4">
            <div className="col-span-7">
              <div className="text-xl font-bold">{data?.name_surname}</div>
              <div className="text-sm font-normal">{data?.job}</div>
              <div className="flex gap-2">
                <div className="text-sm text-gray-500">{data?.location}</div>
                <div>
                  <Button
                    className="!p-0 xl:text-sm text-xs !font-[900] text-blue-700 hover:underline xl:flex hidden"
                    text={"Contact info"}
                  />
                </div>
              </div>
              <div className="text-blue-700 text-sm font-bold hover:underline">
                {data?.connections}
              </div>
              <div className="pt-2 xl:flex flex-auto gap-2">
                <div>
                  <Button className="rounded-[2rem] bg-[#0B65C2] text-white text-xs font-bold hover:bg-blue-900 w-[6.95rem] h-[2rem] flex items-center justify-center gap-2 ">
                    <SVG icon="paper-send" size={14} />
                    <span className="text-center text-[14.5px]">Message</span>
                  </Button>
                </div>
                <div>
                  <Button className="rounded-[2rem] text-center text-[14.5px] p-0 bg-[#fff] text-darky border border-gray-600 hover:border-[1px] hover:border-darky text-xs font-bold hover:bg-neutral-200 w-[5.4.5rem] h-[2rem] flex items-center justify-center  ">
                    More
                  </Button>
                </div>
              </div>
            </div>
            <div className="font-normal col-span-3 ">
              <div>
                <div className="flex justify-end  pb-5">
                  <Button
                    icon={
                      <SVG
                        icon="bell"
                        className="rounded-md font-bold transition-all  hover:text-yellow-600 hover:rounded-full"
                        size={20.5}
                      />
                    }
                    className="w-[14px] h-[9px] text-darky "
                  />
                </div>
              </div>
              <div className=" items-center xl:flex hidden ">
                <div className="h-[32px] w-[32px] ">
                  <img
                    src={data?.currentCompanyPhoto}
                    alt="current company"
                    className="h-full w-full cursor-pointer object-cover "
                  />
                </div>
                <div className="ml-2 text-sm font-bold ">
                  {data.currentCompany}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
