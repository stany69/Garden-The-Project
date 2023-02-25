import "./Coupon.css";
import Gnome from "../media/gnome.png";

function Coupon() {
  return (
    <div className="coupon_wraapper" id="coupon">
      <div className="coupon_left">
        <img className="gnome" src={Gnome} alt="gnome" />
      </div>
      <div className="coupon_right">
        <p className="right_text-up">5% Discount</p>
        <p className="right_text-down">on first order</p>
        <form action="">
          <input className="number" type="tel" placeholder="+49" />
          <input className="submit" type="submit" value="Get a discount" />
        </form>
      </div>
    </div>
  );
}

export default Coupon;
