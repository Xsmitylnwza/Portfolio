import {CgCornerDownRight} from "react-icons/cg";
import {ImGithub} from "react-icons/im";

export default function RenderButton({work}) {
  return (
    <div className="flex gap-[20px] mt-auto mb-[25px]">
      <a
        href={work.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[8px] p-2 border-[3px] border-white rounded-[14px] duration-200 bg hover:bg-red-900"
      >
        <ImGithub size={20} />
        Github
      </a>
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[5px] p-2 border-[3px] border-white rounded-[14px] duration-200 bg hover:bg-yellow-600"
      >
        <CgCornerDownRight size={20} />
        Demo
      </a>
    </div>
  );
}
