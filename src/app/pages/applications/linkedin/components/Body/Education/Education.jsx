import { LinkedinPageDataContext, useLinkedinPageDataContext } from "../../../../../../contexts/LinkedinPageProvider";

export default function Education() {
  const { mainDataOfUser } = useLinkedinPageDataContext(
    LinkedinPageDataContext
  );

  return (
    <>
      {mainDataOfUser?.map((data) => (
        <>
          <div className="pt-2 pb-2">
            <div className="bg-white text-darky rounded-[0.395rem] p-5">
              <div className="font-bold text-[20px] pb-2">Education</div>
              <div className="grid grid-cols-12">
                {data?.education?.map((edu) => (
                  <>
                    <div className="col-span-1">
                      <img
                        src={edu?.picture}
                        alt="linkedin-school-picture"
                        className="fill  w-[45px] h-[45px] cursor-pointer"
                      />
                    </div>
                    <div className="col-span-11 pb-2 pl-2border-gray-300">
                      <div className="font-bold">{edu?.name}</div>
                      <div className="text-[14px]">{edu?.info}</div>
                      <div className="text-[14px]">{edu?.date}</div>
                       <div className="text-[14px] text-gray-900">
                       Activities and societies:  {edu?.activities}
                      </div> 
                      <div className="text-[14px] ">
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
