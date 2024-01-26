import Button from "../../../components/common/Button";
import { AppOpenCloseContext, useAppOpenCloseContext } from "../../../contexts/trashContexts/AppOpenClose";

export default function Customer() {
    const {
        handleButtonCustomer,
        customer,
      } = useAppOpenCloseContext(AppOpenCloseContext);
    
  return (
    <div className="border-2 border-[#585857b3] text-gray-400 mt-[100px] rounded-md mx-10">
      <div className="p-2 bg-darky">
        <div className="p-2">
          <Button
            className="h-2 w-2 bg-red-400"
            onClick={() => {
                handleButtonCustomer()
            }}
          />
        </div>
        <div className="text-start pb-2 pl-11 text-[26px] bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent w-[300px]">
          Customer Table
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="hover:bg-slate-700 rounded-md transition-all">
            <Button
              onClick={() => {
                // handleButtonNotice();
              }}
              text={"Notice"}
            />
          </div>
          <div className="">
            <Button
              className="hover:bg-slate-700 rounded-md transition-all"
              text={"Informations for Website"}
              onClick={() => {
                // handleButtonInfoWeb()
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 pt-5 ">
          <div className="col-span-6">
            {/* <div className="text-white">{notice && <Notice />} </div> */}
          </div>
          <div className="col-span-6">
          {/* <div className="">{infoWeb && <InfoWeb />} </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
