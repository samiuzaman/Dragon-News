import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      <div className="flex flex-col gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn btn-outline categoryBtn "
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
