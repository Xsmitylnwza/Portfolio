export default function Job({works}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] grid-rows-2 gap-x-2 gap-y-12 justify-evenly ">
      {works.map((work, index) => (
        <>
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
              className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
            >
              <div className="text-[50px] text-white text-center">UWU</div>
            </a>
            <div className="mt-[5px]">{work.name}</div>
          </div>
        </>
      ))}
    </div>
  );
}
