import LeftSideMenu from "./leftSideMenu/leftSideMenu";
import Middle from "./middle/Middle";
import RightSideMenu from "./rightSideMenu/RightSideMenu";

export default function MenuInner() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Middle />
      </div>


   

      <div className="flex items-center justify-between pl-[0.938rem] pr-[0.938rem] pt-[0.650rem] pb-[0.520rem] text-xs text-white overflow-hidden">
        <div className="flex items-center gap-5 justify-center ">
          <LeftSideMenu />
        </div>
        <div>
          <RightSideMenu />
        </div>
      </div>
    </>
  );
}
