import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsPost = ({ news }) => {
  const { author, image_url, title, total_view, rating, details } = news;
  const { img, name, published_date } = author;
  const { number } = rating;
  console.log(news);
  return (
    <div className="border-2 border-[#F3F3F3] rounded-lg">
      <div className="bg-[#F3F3F3] flex justify-between items-center p-4">
        <div className="flex gap-2">
          <div>
            <img className="w-10 h-10 rounded-full" src={img}></img>
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#403F3F]">{name}</h4>
            <p className="text-sm text-[#706F6F]">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaRegBookmark className="w-6 h-6" />
          <IoShareSocialOutline className="w-6 h-6" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl text-[#403F3F] font-bold pb-4">{title}</h2>
        <img className="mb-7" src={image_url} alt="" />
        <p className="descriptionStyle text-[#706F6F] text-base font-medium mb5">
          {details}
        </p>
        <Link
          to={`/news/${news?._id}`}
          className=" text-[#FF8C47FF] cursor-pointer"
        >
          Read More
        </Link>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <Rating
                initialRating={number}
                emptySymbol={<FaStar className="text-gray-400" />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
            </div>
            <span className="text-base text-[#706F6F] font-medium">
              {number}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IoEyeSharp className="text-xl text-[#706F6F]" />
            <span className="text-base text-[#706F6F] font-medium">
              {total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
