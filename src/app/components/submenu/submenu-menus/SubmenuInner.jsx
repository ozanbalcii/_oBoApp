import SVG from "../../../assets/svg/SVG";
import { motion } from "framer-motion";
import {
  SubmenuContext,
  useSubmenuContext,
} from "../../../contexts/SubmenuProvider";
import { NavLink } from "react-router-dom";
export default function SubmenuInner() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);

  const handleOpen = () => {
    setShowsubMenu(true);
  };

  return (
    <>
      <div className=" text-xs " onMouseEnter={handleOpen}>
        .
      </div>
      {showsubMenu && (
        <>
          <div className={`inset-0  rounded-xlsm  `}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-center gap-5 border-[0.006rem] shadow-3xl border-gray-500  rounded-3xl pt-[0.89rem]  pb-[0.89rem] text-[1.563rem] backdrop-filter bg-zinc-800 bg-opacity-50  ">
                <div className="rounded-lg ">
                  <SVG icon="finder" className={"rounded-xl"} />
                </div>
                <NavLink to="/linkedin-ozanbalci98" className="rounded-lg ">
                  <SVG icon="linkedin" className={"rounded-xl"} />
                </NavLink>
                <div className=" rounded-lg ">
                  <SVG icon="spotify" className={"rounded-xl"} />
                </div>
                <div className="rounded-lg ">
                  <SVG icon="gmail" className={"rounded-xl"} />
                </div>
                <div className="rounded-lg ">
                  <SVG icon="github" className={"rounded-xl"} />
                </div>
                <div className="rounded-lg ">
                  <SVG icon="vsCode" className={"rounded-xl bg-white p-2"} />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
