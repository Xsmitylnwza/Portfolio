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
            className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-400 cursor-pointer flex items-center justify-center"
          >
            <div className="text-[20px] text-white text-center px-[20px]">
              {work.details}
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
