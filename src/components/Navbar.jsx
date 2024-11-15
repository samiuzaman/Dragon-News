import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto py-6 flex justify-between items-center">
      <div>
        <p>{user && user?.name}</p>
      </div>
      <div className="space-x-6 text-[#706F6F]">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-2 h-8">
        {user && user?.email ? (
          <button onClick={handleSignOut} className="btn btn-outline">
            LogOut
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <img src={UserIcon}></img>
            <Link
              to="/auth/login"
              className="bg-[#403F3F] text-white text-lg font-medium px-5 py-2"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
