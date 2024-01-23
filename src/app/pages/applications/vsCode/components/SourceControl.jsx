import SVG from "../../../../assets/svg/SVG";
import Button from "../../../../components/common/Button";
import Input from "../../../../components/common/Input";

export default function SourceControl() {
  return (
    <>
      <div className="bg-[#252526] text-white rounded-md ">
        <div className="flex justify-between transition-all">
          <div className="font-normal">Source Control</div>
          <div className="flex ">
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="loop2" size={12} />}
            />
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="minus" size={12} />}
            />
          </div>
        </div>
        <div className="pt-2">
          <div>
            <Input
              placeholder={"Search"}
              className={"w-full bg-[#373739] border border-gray-600"}
            />
          </div>
          <div className="pt-2">
            <Button
              className="hover:bg-green-700 w-full bg-green-600 font-normal transition-all"
              text={"Commit"}
              icon={<SVG className={"mr-2"} icon="loop2" size={12} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
