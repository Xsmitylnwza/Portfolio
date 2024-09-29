import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Work from "./Work";

export default function App() {
  return (
    <div className="box font-Fredoka bg-black overflow-x-hidden text-[#FFFF] w-screen h-auto px-[200px] pt-[25px] pb-[50px]">
      <Navbar />
      <Aboutme />
      <Work />
    </div>
  );
}
