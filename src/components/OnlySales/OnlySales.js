import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddProductsBasketAction } from "../../Store/basketReducer";
import "./OnlySales.css";



export function OnlySales() {


  let dispatch = useDispatch();


  const products = useSelector((store) => store.products.products).filter(
    (elem) => {
      if (elem.price > elem.discont_price) {
        return elem;
      }
    }
  );

  

  return (
    <div>
      <h3 className="all_sales-head">All Sales</h3>

      <div className="fetch_info onlySales_wrapper">
        {products.map((elem) => (
          <div key={elem.id} className="sales_products">
            <img
              className="sales_img"
              width={280}
              height={260}
              src={`http://localhost:3333${elem.image}`}
              alt=""
            />
            <div className="btn_item ">
              <button
                onClick={() => {
                  dispatch(AddProductsBasketAction(elem));
                }}
                className="oneCategory_btn catalog_btn onlySales_btn"
              >
                Add to Basket
              </button>
            </div>

            <div className="prices_sales block_info">
              <Link to={"/item/" + elem.id} className="sales_link ">
                <div className="sales_price-info">
                  <p className="discount_price">{elem.discont_price} €</p>
                  <p className="orig_prices">{elem.price} €</p>
                  <p className="percentage">
                    {Math.round(
                      ((elem.price - elem.discont_price) / elem.price) * 100
                    )}{" "}
                    %
                  </p>
                </div>
                <h4 className="cat_title">{elem.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
