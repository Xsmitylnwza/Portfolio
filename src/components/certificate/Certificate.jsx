import {Tooltip} from "react-tooltip";
import RenderDetail from "../share/RenderDetail";
import RenderButton from "../share/RenderButton";

export default function Certificate({cert, index}) {
  return (
    <div>
      <div key={index} className="relative w-full h-[325px] rounded-[10px]">
        <img
          src={cert.src}
          className="w-full h-full object-cover rounded-md"
          alt={cert.name}
        />
        <div className="absolute overflow-auto inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-400 flex items-center justify-center">
          <div className="flex flex-col items-center h-full w-auto">
            <RenderDetail detail={cert.detail} />
            <RenderButton work={cert.button} />
          </div>
        </div>
      </div>
      <div className="mt-[5px] mb-[8px] ">
        <a
          href={cert.button[0].url}
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="certificate"
          data-tooltip-content="view certificate"
          className="text-[18px] cursor-pointer hover:underline hover:text-blue-700"
        >
          {cert.name}
        </a>
        <Tooltip id="certificate" />
      </div>
    </div>
  );
}
