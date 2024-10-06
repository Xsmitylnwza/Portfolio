const categoryClasses = {
  FE: "bg-gradient-to-r from-blue-600 to-blue-700",
  BE: "bg-gradient-to-r from-red-600 to-red-700",
  DEVOPS: "bg-gradient-to-r from-yellow-600 to-yellow-700",
};

export default function RenderCategories({categories}) {
  return (
    <div className="flex">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`p-2 mr-[4px] rounded-[13px] border-2 border-white pointer-events-none ${
            categoryClasses[category] || ""
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
