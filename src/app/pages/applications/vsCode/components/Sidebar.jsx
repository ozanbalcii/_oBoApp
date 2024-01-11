import React from "react";
import SVG from "../../../../assets/svg/SVG";
import Button from "../../../../components/common/Button";

export default function Sidebar() {
  return (
    <>
      <div className="bg-white w-16">
        <div className="bg-[#333333] text-white h-full flex items-center justify-center">
          <div >
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
            <Button
              className="text-white "
              icon={<SVG  icon="document-file-pdf" size={20} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
