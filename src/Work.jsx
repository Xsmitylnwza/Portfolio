import {useState} from "react";
import Job from "./Job";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const works = [
    {
      name: "Wild-Oasis Hotel Management",
      src: "/Wild-Oasis.png",
      category: "FE",
      url: "https://the-wild-osasis-bay.vercel.app/",
    },
    {
      name: "Zuchini Review",
      src: "/zuchini-review.png",
      category: "BE",
      url: "https://zuchini-review.vercel.app/",
    },
    {
      name: "Decrypt the secrects password",
      src: "/password-game.png",
      category: "DEVOPS",
      url: "https://bejewelled-puppy-73e34d.netlify.app/",
    },
    {
      name: "HelloGoose campus PR website",
      src: "/hello-goose.png",
      category: "FE",
      url: "https://hello-goose.vercel.app/",
    },
    {
      name: "Amoung Duck",
      src: "/among-duck.png",
      category: "BE",
      url: "https://among-duck-hellogoose.vercel.app/",
    },
    {
      name: "Intregated Project Kradan Board",
      src: "/intregated-projects.png",
      category: "DEVOPS",
      url: "https://intproj23.sit.kmutt.ac.th/sy2/",
    },
  ];

  const filteredWorks = works.filter(
    (work) => filter === "All" || work.category === filter
  );

  return (
    <div className="">
      <div className="flex justify-between w-[50%] ml-auto mr-auto mb-[15px]">
        <button
          className={` rounded-[12px] min-w-[50px] px-[7px] py-[5px] duration-100 hover:brightness-50  ${
            filter === "All"
              ? "bg-gray-200 text-gray-900 font-[600]"
              : "text-gray-200 bg-gray-900"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`rounded-[8px] min-w-[50px] px-[7px] py-[5px] duration-100 hover:brightness-50  ${
            filter === "FE"
              ? "bg-gray-200 text-gray-800 font-[600]"
              : "text-gray-200 bg-gray-900"
          }`}
          onClick={() => setFilter("FE")}
        >
          Front-End
        </button>
        <button
          className={`rounded-[8px] min-w-[50px] px-[7px] py-[5px] duration-100 hover:brightness-50  ${
            filter === "BE"
              ? "bg-gray-200 text-gray-800 font-[600]"
              : "text-gray-200 bg-gray-900"
          }`}
          onClick={() => setFilter("BE")}
        >
          Back-End
        </button>
        <button
          className={`rounded-[8px] min-w-[50px] px-[7px] py-[5px] duration-100 hover:brightness-50  ${
            filter === "DEVOPS"
              ? "bg-gray-200 text-gray-800 font-[600]"
              : "text-gray-200 bg-gray-900"
          }`}
          onClick={() => setFilter("DEVOPS")}
        >
          DevOps
        </button>
      </div>
      <Job works={filteredWorks} />
    </div>
  );
}
