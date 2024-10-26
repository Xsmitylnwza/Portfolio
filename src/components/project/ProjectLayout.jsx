import {useState} from "react";
import Project from "./Project";
import Job from "../share/Job";
import Topic from "../share/Topic";

const filters = [
  {label: "All", value: "All"},
  {label: "Front-End", value: "FE"},
  {label: "Back-End", value: "BE"},
  {label: "DevOps", value: "DEVOPS"},
];

const projects = [
  {
    name: "Wild-Oasis Hotel Management",
    src: "/Wild-Oasis.png",
    details:
      "Hotel management app that use can manage their resource project from React & Next.js course.",
    category: ["FE", "BE"],
    tools: ["react", "react_query", "supabase", "postgres"],
    button: [
      {name: "github", url: "https://github.com/Xsmitylnwza/The-wild-osasis"},
      {name: "demo", url: "https://the-wild-osasis-bay.vercel.app/"},
    ],
  },
  {
    name: "Zuchini Review",
    src: "/zuchini-review.png",
    details:
      "Website for viewing and writing reviews of movies based on rotten tomatoes",
    category: ["FE", "BE"],
    tools: ["vue", "supabase", "postgres"],
    button: [
      {name: "github", url: "https://github.com/Xsmitylnwza/Zuchini-Review"},
      {name: "demo", url: "https://zuchini-review.vercel.app/"},
    ],
  },
  {
    name: "Intregated Project Kradan Board",
    src: "/intregated-projects.png",
    details:
      "A Todo list application for management tasks provide a feature to customization the entire app that user can settings on own way",
    category: ["FE", "BE", "DEVOPS"],
    tools: ["vue", "spring_boot", "my_sql", "docker"],
    button: [
      {name: "github", url: "https://github.com/Mixue-it-TH"},
      {name: "demo", url: "https://intproj23.sit.kmutt.ac.th/sy2/"},
    ],
  },
  {
    name: "Use Popcorn",
    src: "/use-popcorn.png",
    details:
      "A movie searching website to find favorite to collect to watch-list and ratings from my React & Next.js course.",
    category: ["FE"],
    tools: ["react"],
    button: [
      {
        name: "github",
        url: "https://github.com/Xsmitylnwza/Wordwise.git",
      },
      {
        name: "demo",
        url: "https://use-popcorn-two-liart.vercel.app/",
      },
    ],
  },
  {
    name: "World wise",
    src: "/word-wise.png",
    details:
      "WorldWise is designed to help users explore, track, and learn about cities around the world.  focusing on various aspects API integration, and dynamic routing.",
    category: ["FE"],
    tools: ["react"],
    button: [
      {
        name: "github",
        url: "https://github.com/Xsmitylnwza/Wordwise.git",
      },
      {
        name: "demo",
        url: "https://wordwise-delta.vercel.app/",
      },
    ],
  },
  {
    name: "Decrypt the secrects password",
    src: "/password-game.png",
    details:
      "It's a game for cracking passwords to pass all levels to win the game.",
    category: ["FE"],
    tools: ["vue"],
    button: [
      {
        name: "github",
        url: "https://github.com/Xsmitylnwza/Decrypt-The-Secrect-Password",
      },
      {
        name: "demo",
        url: "https://bejewelled-puppy-73e34d.netlify.app/",
      },
    ],
  },
  {
    name: "HelloGoose campus PR website",
    src: "/hello-goose.png",
    details:
      "A website for advertising Hello World Camp. The website has details of the content that will be taught within the camp.",
    category: ["DEVOPS"],
    tools: ["docker"],
    button: [
      {name: "github", url: "https://github.com/Hello-Goose/Hello-Goose"},
      {name: "demo", url: "https://hello-goose.vercel.app/"},
    ],
  },
  {
    name: "Amoung Duck",
    src: "/among-duck.png",
    details:
      "Advertising game. Hello World Campus helps juniors find their own passions in the content the camp teaches.",
    category: ["DEVOPS"],
    tools: ["docker"],
    button: [
      {name: "github", url: "https://github.com/Xsmitylnwza/AmongDuckPls"},
      {name: "demo", url: "https://among-duck-hellogoose.vercel.app/"},
    ],
  },

  {
    name: "Wild-Oasis-Next.js",
    src: "/wild-oasis-nextjs.png",
    details:
      "A mini hotel management application made by Next.js from my React & Next.js course.",
    category: ["FE", "BE"],
    tools: ["nextjs", "supabase", "postgres"],
    button: [
      {
        name: "github",
        url: "https://github.com/Xsmitylnwza/The-wild-oasis-NEXTJS",
      },
      {
        name: "demo",
        url: "https://the-wild-oasis-nextjs-7p3w.vercel.app/",
      },
    ],
  },
  {
    name: "Fast-Pizza Co.",
    src: "/fast-pizza.jpg",
    details:
      "Fast React Pizza Co. is a hands-on React project from a Udemy course designed to simulate a pizza ordering and management system. It teaches students to build a full-featured app with both customer and admin interfaces.",
    category: ["FE"],
    tools: ["react"],
    button: [
      {
        name: "github",
        url: "https://github.com/Xsmitylnwza/Fast-Pizza.git",
      },
      {
        name: "demo",
        url: "https://fast-pizza-xi-ruddy.vercel.app/",
      },
    ],
  },
];

export default function ProjectLayout() {
  const [filter, setFilter] = useState("All");

  const filteredWorks = projects.filter(
    (work) => filter === "All" || work.category.includes(filter)
  );

  return (
    <div className="overflow-auto">
      <Topic topic="My Projects" />
      <div className="flex justify-between w-auto md:w-[80%] lg:w-[50%] ml-auto mr-auto mb-[15px]">
        {filters.map((item) => (
          <button
            key={item.value}
            className={`rounded-[8px] min-w-[50px] px-[7px] py-[5px] duration-100 hover:brightness-50 ${
              filter === item.value
                ? "bg-gray-200 text-gray-800 font-[600]"
                : "text-gray-200 bg-gray-900"
            }`}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Job>
        {filteredWorks.map((work, index) => (
          <Project work={work} key={index} index={index} />
        ))}
      </Job>
    </div>
  );
}
