export default function RenderDetail({detail}) {
  return (
    <div
      className={`text-[20px] mt-auto mb-auto text-center text-white px-[20px] ${
        detail.length > 300 ? "mt-[120px]" : ""
      }`}
    >
      {detail}
    </div>
  );
}
