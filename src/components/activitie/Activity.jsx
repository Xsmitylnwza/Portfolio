export default function Activity({activity, key}) {
  return (
    <div>
      <div key={key} className="relative w-full h-[325px] rounded-[10px]">
        <img
          src={activity.src}
          className="w-full h-full object-cover rounded-md"
          alt={activity.name}
        />
        <div className="absolute overflow-auto inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-400 flex items-center justify-center">
          <div className="flex flex-col items-center h-full w-auto"></div>
        </div>
      </div>
    </div>
  );
}
