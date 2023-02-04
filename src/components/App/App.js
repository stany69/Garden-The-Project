import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import NewSeasonSale from "../NewSeasonSale/NewSeasonSale";
import Sales from "../Sales/Sales";
import Categories from "../Categories/Categories";
import Coupon from "../Coupon/Coupon";
import { AllProductsAction } from "../../Store/allProductsReducer";
import { allProductsReducer } from "../../Store/allProductsReducer";
import {productsAsync} from "../../asyncAction/productsAsync"
import { AllProducts } from "../AllProducts";
function App() {
  return (
    <div>
           <Header />
           <NewSeasonSale />
           <Categories />
           <Coupon/>
           <Sales />
           <Footer/>
           <AllProducts/>
      <div/>
        <Routes>
          
          
        </Routes>
        
     
     
      
    </div>
  );
}

export default App;
