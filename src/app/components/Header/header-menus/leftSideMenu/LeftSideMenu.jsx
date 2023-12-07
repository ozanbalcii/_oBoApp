import { FaApple } from "react-icons/fa";

export default function LeftSideMenu() {
  return (
    <>
      <div>
        <FaApple className="text-[1.094rem]" />
      </div>
        <div className="font-semibold">Google Chorme</div>
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Go</div>
        <div>Window</div>
        <div>Help</div>
    </>
  );
}
