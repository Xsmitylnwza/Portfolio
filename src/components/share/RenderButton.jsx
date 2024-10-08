import {CgCornerDownRight} from "react-icons/cg";
import {ImGithub} from "react-icons/im";
import {SiCoursera, SiUdemy} from "react-icons/si";
import Cappitalrize from "../../util/Cappitalrize";

export default function RenderButton({work}) {
  const iconBtn = {
    github: {icon: <ImGithub size={20} />, class: "hover:bg-red-900"},
    demo: {
      icon: <CgCornerDownRight size={20} />,
      class: "gap-[5px] hover:bg-yellow-600",
    },
    udemy: {icon: <SiUdemy size={20} />, class: "hover:bg-purple-800"},
    coursera: {icon: <SiCoursera size={20} />, class: "hover:bg-blue-800"},
  };

  return (
    <div className="flex gap-[20px] mt-auto mb-[25px]">
      {work.map((data) => (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex gap-[8px] p-2 border-[3px] border-white rounded-[14px] duration-200 bg ${
            iconBtn[data.name].class
          }`}
        >
          {iconBtn[data.name].icon}
          {Cappitalrize(data.name)}
        </a>
      ))}
    </div>
  );
}
