import { BsToggles, BsDisplay, BsBattery } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

export default function RightSideMenu() {
  return (
    <>
      <div className="flex ">
        <div className="flex gap-5 items-center pr-5 text-[1.063rem]">
          <div>
            <AiFillSound />
          </div>
          <div>
            <BsDisplay />
          </div>
          <div>
            <BsBattery className="text-[1.188rem]" />
          </div>
          <div>
            <MdSearch className="text-[1.188rem]" />
          </div>
          <div>
            <BsToggles className="text-[0.900rem]" />
          </div>
        </div>

        <div className="flex gap-3">
          <div>Thu Dec 7</div>
          <div>16:16</div>
        </div>
      </div>
    </>
  );
}
