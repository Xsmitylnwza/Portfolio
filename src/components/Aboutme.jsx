import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

const iconData = [
  {url: "https://github.com/Xsmitylnwza", icon: <FaGithubSquare size={32} />},
  {url: "https://medium.com/@golfpopmei14", icon: <FaMedium size={32} />},
  {
    url: "https://www.instagram.com/viewvyz_/",
    icon: <FaInstagramSquare size={32} />,
  },
  {
    url: "https://www.linkedin.com/in/xsmity-vi-266a05323/",
    icon: <FaLinkedin size={32} />,
  },
];

export default function Aboutme() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between px-[6%] mb-[40px]">
      <div className="w-full sm:w-[50%]">
        <div className="font-medium text-center sm:text-start text-[35px]">
          I'm Chaimongkon Sokgampang I'm a Developer.
        </div>
        <div className="font-light text-[18px] text-center sm:text-start ">
          I'm a passionate and motivated student with a strong interest in
          coding and a goal to become a skilled full-stack developer. I am eager
          to develop my technical abilities by gaining hands-on experience
          working on diverse projects.
        </div>
        <div className="flex gap-[15px] justify-center sm:justify-start mt-[50px] ">
          {iconData.map((data, index) => (
            <a
              key={index}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:scale-125 duration-200"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="w-[200px] ml-auto mr-auto sm:ml-0 sm:mr-0 sm:w-[40%] ">
        <img
          src="./myself.png"
          className="animated-float w-[300px] h-[350px] rounded-lg"
          alt="myself"
        />
      </div>
    </div>
  );
}
