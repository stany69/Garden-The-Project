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
import { AllProducts, Catalog } from "../Catalog";
import {GetOneProduct} from "../GetOneProduct"
import { Basket } from "../Basket/Basket";




function App() {
  return (
    <div>
      
           
           <Header />
           <NewSeasonSale />
           <Categories />
           <Coupon/>
           <Sales />
           <Footer/>
           
        <Routes>
           <Route path="/categories" element = {<Categories/>}/>
           <Route path="/coupon" element = {<Coupon/>}/>
           <Route path="/sales" element = {<Sales/>}/>
           <Route path="/contacts" element = {<Footer/>}/>
           <Route path="/basket" element = {<Basket/>}/>
           
       </Routes>
           
           
         
     
        
       
     
      
    </div>
  );
}

export default App;
