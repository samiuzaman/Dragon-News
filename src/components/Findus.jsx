import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <h3 className="text-xl text-black font-bold mb-5">Login With</h3>
      <div className="join join-vertical flex">
        <button className="btn join-item border-[#E7E7E7] flex justify-start">
          <FaFacebook className="text-2xl text-[#3B599C] flex justify-start" />{" "}
          Facebook
        </button>
        <button className="btn join-item border-[#E7E7E7] flex justify-start">
          <FaInstagram className="text-[#D82D7EFF] text-2xl" />
          Instagram
        </button>
        <button className="btn join-item border-[#E7E7E7] flex justify-start">
          <FaTwitter className="text-2xl text-[#58A7DE]" /> Twitter
        </button>
      </div>
    </div>
  );
};

export default Findus;
