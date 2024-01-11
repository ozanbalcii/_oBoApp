import Desktop from "../components/desktop/Desktop";
import Header from "../components/Header/Header";

export default function MasterLayout() {
  return (
    <div className="bg-no-repeat sm:bg-gradient-to-r sm:from-purple-900 sm:via-[#3311A7] sm:to-[#3311A7]">
      <Header />
      <Desktop />
    </div>
  );
}