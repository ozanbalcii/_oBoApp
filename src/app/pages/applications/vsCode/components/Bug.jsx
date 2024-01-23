import SVG from "../../../../assets/svg/SVG";
import Button from "../../../../components/common/Button";

export default function Bug() {
  return (
    <>
      <div className="bg-[#252526] text-white rounded-md ">
        <div className="flex justify-between transition-all">
          <div className="font-normal">Run and Debug</div>
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
        <div className="pt-3">
          <div>
            <Button
              className="hover:bg-green-700 w-full bg-green-600 font-[250] ransition-all"
              text={"Run and Debug"}
            />
            <div className="pt-2">
              <p>
                To customize Run and Debug
                <span className="text-blue-500 cursor-pointer hover:underline pl-1">
                  create a launch.json file
                </span>
                .
              </p>
              <p className="pt-2">
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Show all automatic debug configurations
                </span>
                .
              </p>
            </div>
            <div className="pt-3">
              <Button
                className="hover:bg-green-700 w-full bg-green-600 font-[250] ransition-all p-1"
                text={"JavaScript Debug Terminal"}
              />
            </div>
            <div className="pt-2">
              <p>
                You can use the JavaScript Debug Terminal to debug Node.js
                processes run on the command line.
              </p>
              <div className="flex justify-center">
                <Button
                  className="hover:bg-green-700 w-1/2  mt-2 bg-green-600 font-[250] ransition-all p-1"
                  text={"Debug URL"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
