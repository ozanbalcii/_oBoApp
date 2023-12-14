import { useState } from "react";
import { FaApple } from "react-icons/fa";
import Button from "../Button";

export default function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Button className="" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaApple />
      </Button>
      {dropdownOpen && (
        <div className="absolute overflow-visible   ">
          <div className="bg-white text-black">dropdown hello</div>
          <div className="bg-white text-black">dropdown hello</div>
          <div className="bg-white text-black">dropdown hello</div>
          <div className="bg-white text-black">dropdown hello</div>
          <div className="bg-white text-black">dropdown hello</div>
          <div className="bg-white text-black">dropdown hello</div>
       
        </div>
      )}
    </div>
  );
}
