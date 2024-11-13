import Swiming from "../assets/swimming.png";
import Class from "../assets/class.png";
import PlayGround from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-[#F3F3F3] py-3 px-1">
      <h3 className="text-xl text-[#403F3F] font-bold p-2">Q-Zone</h3>
      <div className="space-y-4">
        <div>
          <img src={Swiming} alt="Swiming Image"></img>
          <p></p>
        </div>
        <div>
          <img src={Class} alt="Class Room Image" />
        </div>
        <div>
          <img src={PlayGround} alt="PlayGround Image" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
