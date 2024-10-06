import {Tooltip} from "react-tooltip";
import RenderTools from "../share/RenderTool";
import RenderCategories from "../share/RenderCategories";
import RenderDetail from "../share/RenderDetail";
import RenderButton from "../share/RenderButton";

export default function Project({work, index}) {
  return (
    <div>
      <div key={index} className=" relative w-full h-[325px] rounded-[10px]">
        <img
          src={work.src}
          className="w-full h-full object-cover rounded-md"
          alt={work.name}
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-400 flex items-center justify-center">
          <div className="flex flex-col items-center h-full">
            <RenderDetail detail={work.details} />
            <RenderTools tools={work.tools} />
            <RenderButton work={work} />
          </div>
        </div>
      </div>
      <div className="mt-[5px] mb-[8px]">
        <a
          href={work.github}
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="github"
          data-tooltip-content="view github repository"
          className="text-[18px] hover:underline hover:text-blue-700"
        >
          {work.name}
        </a>
        <Tooltip id="github" />
      </div>
      <RenderCategories categories={work.category} />
    </div>
  );
}
