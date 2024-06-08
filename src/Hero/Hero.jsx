import "./Hero.css";
import Handicon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero from "../assets/hero_image.png";
function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <h2>NEW ARRIVELS ONLY</h2>
        <div className=" prgph">
          <div className="Hand-icon">
            <p>new</p>
            <img src={Handicon} alt="" />
          </div>
          <p>collections</p>
          <p>for every one</p>
        </div>
        <div className="herolatest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="Hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
export default Hero;
