import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="box font-Fredoka bg-black overflow-x-hidden text-[#FFFF] w-screen h-auto px-[5%] sm:px-[12%] pt-[25px] pb-[50px]">
      <Navbar />
      <Aboutme />
      <Main />
    </div>
  );
}
