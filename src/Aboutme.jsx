import {
  FaFacebookSquare,
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          dolorem eum accusamus! Magni, incidunt ab. Repellat ut alias cumque?
          Exercitationem ex quod praesentium amet maxime vero modi sequi commodi
          unde
        </div>
        <div className="flex gap-[15px] mt-[50px]">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaFacebookSquare size={22} />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithubSquare size={22} />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaMedium size={22} />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaInstagramSquare size={22} />
          </a>
          <a
            href="https://www.google.com"
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
