import { useLoaderData } from "react-router-dom";
import NewsPost from "../components/NewsPost";

const CategoryNews = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h3 className="text-xl text-[#403F3F] font-semibold mb-5">
        Dragon News Home
      </h3>
      <div className="flex flex-col gap-5">
        {data.map((news, index) => (
          <NewsPost key={index} news={news}></NewsPost>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
