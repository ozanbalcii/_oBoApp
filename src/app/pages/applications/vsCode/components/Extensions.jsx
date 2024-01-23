import SVG from "../../../../assets/svg/SVG";
import Button from "../../../../components/common/Button";
import Input from "../../../../components/common/Input";
import {
  ExtensionsContext,
  useExtensionsContext,
} from "../../../../contexts/vsCode/ExtensionsProvider";

export default function Extensions() {
  const { extensionsData, handleToggle, toggle } =
    useExtensionsContext(ExtensionsContext);
  console.log(extensionsData, "extensionsData");
  return (
    <>
      <div className="bg-[#252526] text-white rounded-md transition-all">
        <div className="flex justify-between transition-all">
          <div className="font-normal">Search</div>
          <div className="flex ">
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="folder" size={16} />} 
            />
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="dots" size={12} />}
            />
          </div>
        </div>
        <div className="pt-2">
          <div className="flex items-center justify-center">
            <Input
              placeholder={"Search Extensions in Marketplace"}
              className={" w-full bg-[#373739] border border-gray-600"}
            />
          </div>
        </div>
        <div className="border-b border-gray-600 rounded-md pt-3 ">
          <div className="transition-all hover:bg-[#353536]">
            <Button
              onClick={() => {
                handleToggle();
              }}
              text={"Installed"}
              icon={<SVG className="mr-2" icon="arrow-right2" size={15} />}
              className="pt-2 "
            />
          </div>
        </div>
        {toggle && (
          <div className="pt-2">
            <div className="text-white rounded-md">
              <div>
                {extensionsData?.map((item) => (
                  <div
                    className="bg-[#2f2f2f] pt-5 flex gap-2 items-center p-3"
                    key={item.id}
                  >
                    <div>
                      <img
                        src={item?.picture}
                        alt="vscode-extension-picture"
                        className="rounded-full cursor-pointer w-14 h-14 object-cover"
                      />
                    </div>
                    <div className="pl-5">
                      <div>
                        <Button
                          className="font-thin text-[14px] !p-0 hover:text-yellow-500"
                          text={item?.name}
                        />
                      </div>
                      <div className="font-thin text-[12px]">{item?.desc}</div>
                    <div className="flex gap-2">
                    <div>{item?.producer}</div>  <div><SVG className='text-blue-600' icon="checkmark" size={16} /></div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
