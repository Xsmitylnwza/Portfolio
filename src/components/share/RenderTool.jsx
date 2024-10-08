import {BiLogoPostgresql, BiLogoSpringBoot} from "react-icons/bi";
import {FaDocker, FaGithub, FaJava, FaReact, FaVuejs} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiGithubactions,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiUdemy,
} from "react-icons/si";
import {Tooltip} from "react-tooltip";
import Cappitalrize from "../../util/Cappitalrize";

const toolIcon = {
  vue: <FaVuejs color="#3fb984" size={35} />,
  react: <FaReact color="#58c4dc" size={35} />,
  redux: <SiRedux color="#764abc" size={35} />,
  react_query: <SiReactquery color="#ff4154" size={35} />,
  nextjs: <RiNextjsFill color="#FFF" size={35} />,
  java_script: <RiJavascriptFill color="yellow" size={35} />,
  tailwind: <RiTailwindCssFill color="#38bdf8" size={35} />,
  styled_components: <SiStyledcomponents color="#FFF" size={35} />,
  spring_boot: <BiLogoSpringBoot color="#6db33f" size={35} />,
  supabase: <SiSupabase color="#3ecf8e" size={35} />,
  java: <FaJava color="orange" size={35} />,
  my_sql: <SiMysql color="#5f97ff" size={35} />,
  mongo: <SiMongodb color="#4faa41" size={35} />,
  postgres: <BiLogoPostgresql color="#336791" size={35} />,
  docker: <FaDocker color="#129fdb" size={35} />,
  kubernetes: <SiKubernetes color="#326de6" size={35} />,
  github: <FaGithub color="#FFF" size={35} />,
  github_action: <SiGithubactions color="#FFF" size={35} />,
  udemy: <SiUdemy color="#a435f0" size={35} />,
};

export default function RenderTools({name = "name", tools}) {
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-[15px] ">
      <span className="mt-[5px]">{name}:</span>
      {tools.map((tool, index) => (
        <>
          <div
            key={index}
            className="transform hover:scale-125 duration-200"
            data-tooltip-id="tool-detail"
            data-tooltip-content={Cappitalrize(tool)}
          >
            <div>{toolIcon[tool]}</div>
          </div>
          <Tooltip id="tool-detail" />
        </>
      ))}
    </div>
  );
}
