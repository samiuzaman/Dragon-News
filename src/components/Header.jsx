import moment from "moment";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center py-5 text-center">
      <img className="w-96 mx-auto mb-4" src={Logo}></img>
      <p className="text-lg text-[#706F6F] mb-2">
        Journalism Without Fear or Favour
      </p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
