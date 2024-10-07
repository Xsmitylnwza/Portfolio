import {BiLogoPostgresql, BiLogoSpringBoot} from "react-icons/bi";
import {FaDocker, FaReact, FaVuejs} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";
import {SiMysql, SiReactquery, SiSupabase} from "react-icons/si";
import {Tooltip} from "react-tooltip";

const toolIcon = {
  vue: <FaVuejs color="#3fb984" size={35} />,
  react: <FaReact color="#58c4dc" size={35} />,
  reactquery: <SiReactquery color="#ff4154" size={35} />,
  nextjs: <RiNextjsFill color="#FFF" size={35} />,
  springboot: <BiLogoSpringBoot color="#6db33f" size={35} />,
  supabase: <SiSupabase color="#3ecf8e" size={35} />,
  sql: <SiMysql color="#129f" size={35} />,
  postgres: <BiLogoPostgresql color="#336791" size={35} />,
  docker: <FaDocker color="#129fdb" size={35} />,
};

export default function RenderTools({name, tools}) {
  return (
    <div className="flex flex-row gap-3 mt-[15px]">
      <span className="mt-[5px]">{name}:</span>
      {tools.map((tool, index) => (
        <>
          <div
            key={index}
            className="transform hover:scale-125 duration-200"
            data-tooltip-id="tool-detail"
            data-tooltip-content={tool}
          >
            <div>{toolIcon[tool]}</div>
          </div>
          <Tooltip id="tool-detail" />
        </>
      ))}
    </div>
  );
}
