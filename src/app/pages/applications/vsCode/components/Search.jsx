import React from "react";
import Button from "../../../../components/common/Button";
import SVG from "../../../../assets/svg/SVG";
import Input from "../../../../components/common/Input";

export default function Search() {
  return (
    <>
      <div className="bg-[#252526] text-white rounded-md ">
        <div className="flex justify-between transition-all">
          <div className="font-normal">Search</div>
          <div className="flex ">
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="loop2" size={12} />}
            />
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="folder" size={16} />}
            />
            <Button
              className="ml-auto hover:bg-gray-700"
              icon={<SVG icon="file-plus" size={16} />}
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
            <Input
              placeholder={"Replace"}
              className={"w-full bg-[#373739] border border-gray-600"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
