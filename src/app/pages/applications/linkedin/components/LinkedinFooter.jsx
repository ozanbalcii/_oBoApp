import SVG from "../../../../assets/svg/SVG";
import Button from "../../../../components/common/Button/index";
export default function LinkedinFooter() {
  return (
    <>
      <div className="grid grid-cols-2 2xl:grid-cols-5 mx-[330px] pt-5">
        <div className="col-span-1">
          <div className="text-[#8C8B89] text-[12px] font-bold ">
            <Button
              style="hover:text-blue-700 hover:underline "
              className="mb-[10px] !p-0"
              text="About"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Community Guidelines"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Privacy & Terms"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Sales Solutions"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Safety Center"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-[#8C8B89] text-[12px] font-bold ">
            <Button
              style="hover:text-blue-700 hover:underline "
              className="mb-[10px] !p-0"
              text="Accessibility"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Careers"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Ad Choices"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Mobile"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-[#8C8B89] text-[12px] font-bold ">
            <Button
              style="hover:text-blue-700 hover:underline "
              className="mb-[10px] !p-0"
              text="Talent Solutions"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Marketing Solutions"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Advertising"
            />
            <Button
              style="font-bold hover:text-blue-700 hover:underline"
              className="mb-[10px] !p-0"
              text="Small Business"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-[#8C8B89] text-[12px] font-bold ">
            <Button
              icon={<SVG icon="question" size={20} />}
              style="hover:text-blue-700 hover:underline gap-1"
              className="mb-[10px] !p-0"
              text="Questions?"
            />
            <Button
              icon={<SVG icon="setting" size={20} />}
              style="hover:text-blue-700 hover:underline gap-1"
              className="mb-[10px] !p-0"
              text="Visit our Help Center."
            />
            <Button
              icon={<SVG icon="home3" size={20} />}
              style="hover:text-blue-700 hover:underline gap-1 "
              className="mb-[10px] !p-0 "
              text="Sales "
            />
          </div>
        </div>
        <div className="col-span-1">
          <span className="text-[#8C8B89] text-[14px]"> Select Language</span>
          <select
            className="w-[100px] h-[30px] bg-[#F8FAFC] border-none rounded-md border border-darky"
            name="language"
            id="language"
          >
            <option value="english">English</option>
            <option value="turkish">Turkish</option>
          </select>
        </div>
      </div>
    </>
  );
}
