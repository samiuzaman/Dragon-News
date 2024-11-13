import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((result) => result.json())
      .then((categori) => setCategories(categori.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">All Caterogy</h2>
      <div className="flex flex-col gap-3 mt-4">
        {categories.map((category) => (
          <button key={category.category_id} className="btn text-[#747272]">
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
