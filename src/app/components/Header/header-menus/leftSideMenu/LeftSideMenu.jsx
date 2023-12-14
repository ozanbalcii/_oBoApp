import Button from "../../../common/Button";
import Apple from "./components/apple/Apple";

export default function LeftSideMenu() {
  return (
    <>
        <Apple/>
        <div className="font-extrabold text-[0.878rem]">Google Chorme</div>
        <Button>File</Button>
        <Button>Edit</Button>
        <Button>View</Button>
        <Button>Go</Button>
        <Button>Window</Button>
        <Button>Help</Button>
    </>
  );
}
