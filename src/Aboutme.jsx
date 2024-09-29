import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

export default function Aboutme() {
  return (
    <div className="flex justify-between px-[75px] mb-[40px]">
      <div className="w-[50%]">
        <div className="font-medium text-[35px]">
          I'm Chaimongkon Sokgampang I'm a Developer.
        </div>
        <div className="font-light text-[18px]">
          am a passionate and motivated student with a strong interest in coding
          and a goal to become a skilled full-stack developer. I am eager to
          develop my technical abilities by gaining hands-on experience working
          on diverse projects.
        </div>
        <div className="flex gap-[15px] mt-[50px]">
          <a
            href="https://github.com/Xsmitylnwza"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithubSquare size={22} />
          </a>
          <a
            href="https://medium.com/@golfpopmei14"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaMedium size={22} />
          </a>
          <a
            href="https://www.instagram.com/viewvyz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaInstagramSquare size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/xsmity-vi-266a05323/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
      <div className="w-[40%]">
        <img
          src="./myself.png"
          className="animated-float w-[300px] h-[350px] rounded-lg"
        ></img>
      </div>
    </div>
  );
}
