import Button from "../../../common/Button";
import Apple from "./components/apple/Apple";
export default function LeftSideMenu() {
  return (
    <>
        <Apple/>
        <div className="font-extrabold text-[0.878rem] className='hover:bg-[#F8FAFC]">Google Chorme</div>
        <Button className='hover:bg-[#F8FAFC]'>File</Button>
        <Button className='hover:bg-[#F8FAFC]'>Edit</Button>
        <Button className='hover:bg-[#F8FAFC]'>View</Button>
        <Button className='hover:bg-[#F8FAFC]'>Go</Button>
        <Button className='hover:bg-[#F8FAFC]'>Window</Button>
        <Button className='hover:bg-[#F8FAFC]'>Help</Button>
    </>
  );
}