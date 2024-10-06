import {FaReact} from "react-icons/fa";
import {GiEvilLove} from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex justify-between min-h-[50px]  mb-[25px] ">
      <div className="flex">
        <div className="hidden sm:block animated-float text-[50px] mr-[25px]">
          {<GiEvilLove size={50} />}
        </div>
        <div>
          <div className="text-[20px] font-semibold">XSMITY PORTFOLIO</div>
          <div className="text-[14px] leading-4">
            <div>King mongkut's university of technology thonburi</div>
            <div>Information and Technology</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {<FaReact size={30} />}
        <div className="text-center sm:text-start">Made with React.</div>
      </div>
    </div>
  );
}
