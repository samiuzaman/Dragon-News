import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto py-6 flex justify-between items-center">
      <div></div>
      <div className="space-x-6 text-[#706F6F]">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-2">
        <img src={UserIcon}></img>
        <button className="bg-[#403F3F] text-white text-xl font-semibold px-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
