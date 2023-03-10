import Arrow from "../media/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import "./Basket.css";
import { Link } from "react-router-dom";
import {
  AddCountBasketAction,
  RemBasketProductsAction,
} from "../../Store/basketReducer";
import { useEffect } from "react";





function Basket() {
  let dispatch = useDispatch();
  const basket = useSelector((store) => store.basket.basket);



  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));

  }, [basket]);



  let total = `${basket.reduce(
    (sum, value) => sum + value.discont_price * value.count,
    0
  )}`;




  return (
    <div className="basket_wrapper">
      <div className="basket_content">
        <h3 className="basket_head">Basket</h3>
        <div className="basket_options">
          <div className="first_option">
            <Link to={"/"} className="nav_list">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link to={"/allCategoriesList"} className="nav_list">
              <p>Categories</p>
            </Link>
          </div>
          <div className="back_toStore">
            <Link className="backToStore_link nav_list" to={"/catalog"}>
              <p className="second_option"> Back to store </p>
              <img className="arrow" src={Arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="basket_container">
          <div className="map_basket-wrapper">
            {basket.map((elem) => (
              <div className="basket_element">
                <div className="basket_img">
                  <img
                    src={baseUrl + elem.image}
                    width={192}
                    height={166}
                    className="basket_img"
                    alt=""
                  />
                </div>
                <div className="basket_title">
                  <h4>{elem.title}</h4>
                  <div className="item_counter">
                    <button
                      onClick={() => dispatch(RemBasketProductsAction(elem.id))}
                      className="plus_minus"
                    >
                      -
                    </button>
                    <p>{elem.count}</p>
                    <button
                      onClick={() => dispatch(AddCountBasketAction(elem.id))}
                      className="plus_minus"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="basket_prices">
                  <p className="discount_price">
                    {elem.discont_price * elem.count} ???
                  </p>
                  <p className="orig_prices">{elem.price} ???</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order_details-block">
            <h4 className="order">Order Details</h4>
            <div className="total_sum">
              <h6 className="total_text">Total:</h6>

              <p className="sum_total">{total} ???</p>
            </div>
            <div className="order_div">
              <form>
                <input
                  className="number tel_basket"
                  type="tel"
                  placeholder="your phone number"
                />
                <input
                  className="submit submit_basket"
                  type="submit"
                  value="Order Now"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
