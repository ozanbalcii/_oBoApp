import LeftSideMenu from "./leftSideMenu/leftSideMenu";
import Middle from "./middle/Middle";
import RightSideMenu from "./rightSideMenu/RightSideMenu";

export default function MenuInner() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-[#3311A7] to-[#4a1fd7]  ">
      <div className="flex items-center justify-center cursor-none">
        <Middle />
      </div>
      <div className="flex items-center justify-between pl-[0.938rem] pr-[0.938rem] pt-[0.650rem] pb-[0.540rem] text-xs text-white overflow-hidden">
        <div className="flex items-center gap-5 justify-center ">
          <LeftSideMenu />
        </div>
        <div>
          <RightSideMenu />
        </div>
      </div>
    </div>
  );
}
