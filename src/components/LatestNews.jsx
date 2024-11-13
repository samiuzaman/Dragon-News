import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto bg-[#F3F3F3] flex items-center gap-5 p-4">
      <span className="bg-[#D72050] px-4 py-2 text-white text-lg font-medium">
        Latest
      </span>
      <Marquee speed={80}>
        <Link className="text-lg font-semibold text-[#403F3F]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          delectus laborum facilis suscipit labore tempora fugiat.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
