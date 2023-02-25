import "./NewSeasonSale.css";
import Garden from "../media/dec_garden.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllSalesProductsList } from "../../asyncAction/productsAsync";
import { useEffect } from "react";




function NewSeasonSale() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSalesProductsList());
  }, []);


  

  return (
    <div className="ns_sale-wrapper">
      <section className="ns_sale-content">
        <div className="left_side">
          <h2 className="newSeason"> New Season </h2>
          <h1 className="sale_sale">Sale</h1>
          <Link to={"/onlySales"}>
            <button className="all_sales-but">All Sales</button>
          </Link>

          <button className="details_but">Details</button>
        </div>
        <div className="right_side">
          <img className="dec_garden" src={Garden} alt="dec_garden" />
        </div>
      </section>
    </div>
  );
}

export default NewSeasonSale;
