import Adds from "./Adds";
import Findus from "./Findus";
import LoginWith from "./LoginWith";
import Qzone from "./Qzone";

const RightNavbar = () => {
  return (
    <div className="space-y-8 grid grid-cols-2 lg:grid-cols-1 justify-between">
      <LoginWith></LoginWith>
      <Findus></Findus>
      <Qzone></Qzone>
      <Adds></Adds>
    </div>
  );
};

export default RightNavbar;
