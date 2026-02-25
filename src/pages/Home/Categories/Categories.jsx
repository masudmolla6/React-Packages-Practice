const categories = [
  { id: 1, name: "Electronics", items: 12 },
  { id: 2, name: "Fashion", items: 8 },
  { id: 3, name: "Accessories", items: 15 },
  { id: 4, name: "Shoes", items: 6 },
  { id: 5, name: "Gadgets", items: 10 },
  { id: 6, name: "Lifestyle", items: 9 },
];

const Categories = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">
            Our Categories
          </h1>
          <p className="text-gray-400 text-lg">
            Browse products by category 😌✨
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-400 rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.name}
              </h2>

              <p className="text-gray-500 text-sm mb-4">
                {category.items} Products
              </p>

              <button className="text-sm text-gray-800 font-medium">
                View Category →
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Categories;