export default function Job({children}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] gap-x-2 gap-y-8 justify-evenly ">
      {children}
    </div>
  );
}
