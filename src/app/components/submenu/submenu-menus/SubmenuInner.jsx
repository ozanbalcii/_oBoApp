import SVG from "../../../assets/svg/SVG";
import { motion } from "framer-motion";
import {
  SubmenuContext,
  useSubmenuContext,
} from "../../../contexts/SubmenuProvider";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../contexts/trashContexts/AppOpenClose";
import Button from "../../common/Button";

export default function SubmenuInner() {
  const { showsubMenu, setShowsubMenu } = useSubmenuContext(SubmenuContext);
  const { open, close, handleButtonPdf, handleButtonLinkedin } =
    useAppOpenCloseContext(AppOpenCloseContext);
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
              <div className="flex items-center justify-center gap-3 border-[0.006rem] shadow-3xl border-gray-500 rounded-3xl pt-[0.89rem] pb-[0.89rem] text-[1.563rem] backdrop-filter bg-zinc-800 bg-opacity-50  ">
                <Button className="rounded-lg !p-0">
                  <SVG icon="finder" className={"rounded-xl"} />
                </Button>

                <Button
                  onClick={() => {
                    handleButtonLinkedin();
                  }}
                  className={`rounded-xl `}
                >
                  <SVG
                    icon="linkedin"
                    className={`rounded-xl transition-all ${
                      open ? "border-[5px] border-yellow-400 " : ""
                    }`}
                  />
                </Button>
                <Button
                  onClick={() => {
                    handleButtonPdf();
                  }}
                  className={`rounded-xl !pl-0`}
                >
                  <SVG
                    icon="document-file-pdf"
                    className={`rounded-xl text-white transition-all ${
                      close ? "border-[5px] border-yellow-400 " : ""
                    }`}
                  />
                </Button>
                
                <Button  className={`rounded-xl !pl-0`}>
                  <SVG icon="vsCode" className={"rounded-xl bg-white p-2"} />
                </Button>

                <Button className=" rounded-lg ">
                  <SVG icon="spotify" className={"rounded-xl"} />
                </Button>
                <Button  className={`rounded-xl !pl-0`}>
                  <SVG icon="gmail" className={"rounded-xl"} />
                </Button>
                <Button  className={`rounded-xl !pl-0`}>
                  <SVG icon="github" className={"rounded-xl"} />
                </Button>
            
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
