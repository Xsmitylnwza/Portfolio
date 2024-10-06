import {BiLogoPostgresql, BiLogoSpringBoot} from "react-icons/bi";
import {FaDocker, FaReact, FaVuejs} from "react-icons/fa";
import {SiMysql, SiReactquery, SiSupabase} from "react-icons/si";
import {Tooltip} from "react-tooltip";

const toolIcon = {
  vue: <FaVuejs color="#3fb984" size={35} />,
  react: <FaReact color="#58c4dc" size={35} />,
  reactquery: <SiReactquery color="#ff4154" size={35} />,
  springboot: <BiLogoSpringBoot color="#6db33f" size={35} />,
  supabase: <SiSupabase color="#3ecf8e" size={35} />,
  sql: <SiMysql color="#129f" size={35} />,
  postgres: <BiLogoPostgresql color="#336791" size={35} />,
  docker: <FaDocker color="#129fdb" size={35} />,
};

export default function Job({works}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] grid-rows-2 gap-x-2 gap-y-20 justify-evenly ">
      {works.map((work, index) => (
        <div key={index} className="relative w-full h-[325px] rounded-[10px]">
          <img
            src={work.src}
            className="w-full h-full object-cover rounded-md"
            alt="Kai Cenat"
          />
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute overflow-auto inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-400 cursor-pointer flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`text-[20px] text-center text-white  px-[20px] ${
                  work.details.length > 300 ? "mt-[120px]" : ""
                }`}
              >
                {work.details}
              </div>
              <div className="flex flex-row gap-3 mt-[15px]">
                <span className="mt-[5px]">Tools:</span>
                {work.tools.map((tool, index) => (
                  <div>
                    <div
                      key={index}
                      data-tooltip-id="tool-detail"
                      data-tooltip-content={tool}
                    >
                      {toolIcon[tool]}
                    </div>
                    <Tooltip id="tool-detail" />
                  </div>
                ))}
              </div>
            </div>
          </a>
          <div className="mt-[5px]">{work.name}</div>
          <div className="flex">
            {work.category.map((data, index) => (
              <div
                key={5 + index}
                className={`p-2 mr-[4px] rounded-[13px] border-2 border-white pointer-events-none ${
                  data === "FE"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700"
                    : ""
                }
                    ${
                      data === "BE"
                        ? "bg-gradient-to-r from-red-600 to-red-700"
                        : ""
                    }
                    ${
                      data === "DEVOPS"
                        ? "bg-gradient-to-r from-yellow-600 to-yellow-700"
                        : ""
                    }`}
              >
                {data}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
