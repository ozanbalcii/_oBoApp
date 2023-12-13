import SVG from "../../../assets/svg/SVG";
import { motion } from "framer-motion";
import {
  SubmenuContext,
  useSubmenuContext,
} from "../../../contexts/SubmenuProvider";

export default function SubmenuInner() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);

  const handleOpen = () => {
    setShowsubMenu(true);
  };
  console.log(showsubMenu);
  // ${showsubMenu ? 'animate__animated  animate__backInUp ' : 'animate__animated animate__bounceOutDown'}
  // <div className=" text-xs bg-white opacity-90" onMouseEnter={handleOpen}> .</div>
  // bg-gradient-to-r from-purple-900 via-[#3311A7] to-[#3311A7]  opacity-90


  return (
    <>
      <div className=" text-xs " onMouseEnter={handleOpen}>
        .
      </div>
      {showsubMenu && (
        <>
          <div
            className={`inset-0  rounded-xlsm  `}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-center gap-5 border-[0.006rem] shadow-3xl border-gray-500  rounded-3xl pt-[0.78rem]  pb-[0.48rem] text-[1.563rem] bg-blur-xl ">
                <div className="rounded-lg ">
                  <SVG icon="finder" className={"rounded-xl"} />
                </div>
                <div className="rounded-lg ">
                  <SVG icon="linkedin" className={"rounded-xl"} />
                </div>
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
                  <SVG
                    icon="vsCode"
                    
                    className={"rounded-xl bg-white p-2"}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
