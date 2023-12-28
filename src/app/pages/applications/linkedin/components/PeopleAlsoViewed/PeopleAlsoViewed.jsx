import SVG from "../../../../../assets/svg/SVG";
import Button from "../../../../../components/common/Button";
import {
  LinkedinCustomDataContext,
  useLinkedinCustomDataContext,
} from "../../../../../contexts/trashContexts/LinkedinCustomProvider";

export default function PeopleAlsoViewed() {
  const { customData } = useLinkedinCustomDataContext(
    LinkedinCustomDataContext
  );

  return (
    <>
      {customData?.map((data) => (
        <>
          <div className="pt-2 overflow-auto">
            <div className="bg-white border-[0.1rem] text-darky rounded-[0.495rem] ">
              <div className="font-normal text-[20px] p-3">
                People also viewed
              </div>
              <div className="grid grid-rows-12">
                {data?.peopleAlsoViewed?.map((peo) => (
                  <div className="pt-3 pr-4 pl-5">
                    <div className="grid grid-row-12">
                      <div className="rows-span-6 2xl:flex pt-2">
                        <div className="w-[50px]">
                          <img
                            src={peo?.picture}
                            alt="linkedin-company-picture"
                            className=" rounded-full cursor-pointer"
                          />
                        </div>
                        <div className="rows-span-6 pt-1 pl-2 pb-3 pr-5 border-gray-300">
                          <div className="font-bold">
                            {peo?.userNameSurname}
                          </div>
                          <div className="text-[14px] pb-2">{peo?.job}</div>
                          <Button
                            style={
                              "border border-gray-400 rounded-[2.585rem] !font-medium hover:bg-gray-300"
                            }
                            text="Connect"
                            icon={
                              <SVG
                                icon="people_add"
                                className="rounded-md font-bold pr-2 transition-all hover:text-yellow-600 hover:rounded-full"
                                size={27.5}
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                 
                    <hr />
                  </div>
                ))}
                   <Button
                      size={15}
                      className="text-gray-500 bg-white border-t w-full !border-none h-full font-[600] hover:bg-gray-200 transition-all gap-1"
                    >
                      Show all
                    </Button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
