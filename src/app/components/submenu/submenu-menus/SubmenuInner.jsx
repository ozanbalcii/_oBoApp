import SVG from "../../../assets/svg/SVG";

export default function SubmenuInner() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full pl-[4.063rem] pr-[4.063rem] pb-[0.313rem] ">
      <div className="inset-0 backdrop-filter backdrop-blur-3xl">
        <div className="flex items-center justify-center gap-5 border-[0.006rem] border-gray-500 rounded-3xl pt-[0.48rem] pb-[0.48rem] text-[1.563rem]">
          <div className="py-[8px] rounded-lg ">
            <SVG icon="finder" size={55} className={"rounded-xl"} />
          </div>
          <SVG icon="linkedin" size={55} className={"rounded-xl"} />
          <SVG icon="spotify" size={55} className={"rounded-xl"} />
          <SVG icon="gmail" size={55} className={"rounded-xl"} />
          <SVG icon="github" size={55} className={"rounded-xl"} />
          <SVG icon="vsCode" size={55} className={"rounded-xl bg-white p-2"} />
        </div>
      </div>
    </div>
  );
}
