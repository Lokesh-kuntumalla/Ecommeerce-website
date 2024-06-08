import "./Offer.css";
import exclusive_image from "../images/exclusive_image.png";

function Offers() {
  return (
    <div className="Offers">
      <div className="Offers-left">
        <h1>EXCLUSIVE OFFERS</h1>
        <h1 className="h1-1">Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="Offers-right">
        <img src={exclusive_image} alt="imag" />
      </div>
    </div>
  );
}

export default Offers;
