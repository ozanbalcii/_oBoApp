import { AppOpenCloseContext, useAppOpenCloseContext } from "../../../../contexts/trashContexts/AppOpenClose";
import Button from "../../../common/Button";
import Apple from "./components/apple/Apple";
export default function LeftSideMenu() {
  const {
    open,
    close,
    vsCodeOpen,
    finder,
  } = useAppOpenCloseContext(AppOpenCloseContext);
  return (
    <>
      <Apple />
      <div className="font-extrabold text-[0.878rem] className='hover:bg-[#F8FAFC]">
        {finder && 'Finder'}
        {open && 'Linkedin' }
        {close && 'ozanBalci.pdf'}
        {vsCodeOpen && 'Code'}
    
      </div>
      <Button className="hover:bg-[#fff4f44f]">File</Button>
      <Button className="hover:bg-[#fff4f44f]">Edit</Button>
      <Button className="hover:bg-[#fff4f44f]">View</Button>
      <Button className="hover:bg-[#fff4f44f]">Go</Button>
      <Button className="hover:bg-[#fff4f44f]">Window</Button>
      <Button className="hover:bg-[#fff4f44f]">Help</Button>
    </>
  );
}
