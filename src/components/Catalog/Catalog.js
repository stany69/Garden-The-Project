import "./Catalog.css";

import { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsInStock } from "../../asyncAction/productsAsync";
import { baseUrl } from "../..";
import {
  FilterProductsAction,
  filterProductsPriceAction,
  SortProductsAction,
} from "../../Store/allProductsReducer";
import { AddProductsBasketAction } from "../../Store/basketReducer";



export function Catalog() {


  const products = useSelector((store) => store.products.products).filter(
    (elem) => elem.show
  );


  let dispatch = useDispatch();
  const formRef = useRef();
  const location = useLocation();



  useEffect(() => {
    dispatch(productsInStock());
    setTimeout(() => {
      dispatch(FilterProductsAction(location.state));
    }, 100);
  }, []);
  

  function setMinMaxPrice(e) {
    let data = new FormData(formRef.current);
    data = Object.fromEntries(data);
    data.max_price = data.max_price ? +data.max_price : Infinity;
    data.min_price = data.min_price ? +data.min_price : -Infinity;
    dispatch(filterProductsPriceAction(data));
  }

  return (
    <div className="allProducts-wrapper">
      <h3 className="catalog_head">All Products</h3>
      <div className="oneCategory_inputs">
        <div className="form_cat">
          <div className="price_div">
            <form
              className="price_form"
              ref={formRef}
              onChange={(e) => setMinMaxPrice(e)}
            >
              <label className="price_label inputs_text">Price</label>
              <input
                className="price_felds"
                name="min_price"
                type={"number"}
                placeholder="from"
              ></input>
              <input
                className="price_felds"
                name="max_price"
                type={"number"}
                placeholder="to"
              ></input>
            </form>
          </div>
          <div className="salesOnly_div">
            <label className="sales_label inputs_text">Sales Only</label>
            <input
              className="sales_check"
              type="checkbox"
              onChange={(e) => dispatch(FilterProductsAction(e.target.checked))}
            ></input>
          </div>
          <div className="sortLabel_div">
            <label className="sort_label inputs_text">Sort:</label>

            <select
              className="select_options"
              onChange={(e) => dispatch(SortProductsAction(e.target.value))}
            >
              <option value={0}>----------</option>
              <option value={1}>By Increase</option>
              <option value={2}>By Decrease</option>
              <option value={3}>Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
      <div className="fetch_info catalog_info">
        {products.map((elem) => (
          <div key={elem.id} className="all_categ-photos catalog_grid">
            <img
              className="all_photos-div catalog_photo"
              src={baseUrl + elem.image}
              alt="photo"
            />
            <div className="btn_item ">
              <button
                onClick={() => {
                  dispatch(AddProductsBasketAction(elem));
                }}
                className="oneCategory_btn catalog_btn"
              >
                Add to Basket
              </button>
            </div>
            <Link to={"/item/" + elem.id} className="sales_link catalog_text">
              <div className="oneCategory_prices">
                <p className="discount_price">{elem.discont_price} €</p>
                {elem.price - elem.discont_price != 0 && (
                  <p style={{ color: "gray" }} className="orig_prices">
                    {elem.price} €
                  </p>
                )}
                {elem.price - elem.discont_price != 0 && (
                  <p style={{ color: "red" }} className="percentage">
                    {Math.round(
                      ((elem.price - elem.discont_price) / elem.price) * 100
                    )}{" "}
                    %
                  </p>
                )}
              </div>

              <h4 className="cat_title">{elem.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
