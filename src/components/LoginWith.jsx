import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const LoginWith = () => {
  return (
    <div>
      <h3 className="text-xl text-black font-bold">Login With</h3>
      <div className="*:w-full space-y-2 mt-5">
        <button className="btn btn-outline btn-info">
          <FaGoogle className="text-xl"/> Login with Google
        </button>
        <button className="btn btn-outline">
          <IoLogoGithub className="text-xl"/> Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
