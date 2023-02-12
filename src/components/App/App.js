import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import NewSeasonSale from "../NewSeasonSale/NewSeasonSale";
import Sales from "../Sales/Sales";
import Categories from "../Categories/Categories";
import Coupon from "../Coupon/Coupon";
import { AllProductsAction } from "../../Store/allProductsReducer";
import { allProductsReducer } from "../../Store/allProductsReducer";
import {productsAsync} from "../../asyncAction/productsAsync"
import { AllProducts, Catalog } from "./Catalog/Catalog";
import {GetOneProduct} from "../GetOneProduct"
import { Basket } from "../Basket/Basket";
import { AllCategoriesList } from "../AllCategoriesList/AllCategoriesList";
import OneCategory from "../OneCategory.js/OneCategory";
import NotFound from "../NotFound/NotFound";




function App() {
  return (
    <div>
      
     
           <Header />
           
             <Routes>
                 <Route path="/" element = {<div className="central_wrapper">
                                             <NewSeasonSale />
                                             <Categories/>
                                             <Coupon/>
                                             <Sales/>
                                            </div>}/>
                
                 <Route path="/basket" element = {<Basket/>}/>
                 <Route path="/catalog" element = {<Catalog/>}/>
                 <Route path="/allCategoriesList" element = {<AllCategoriesList/>}/>
                 <Route path="/allCategoriesList/:id" element = {<OneCategory/>}/>
                 <Route path="*" element = {<NotFound/>}/>
            </Routes>
         <Footer/>
    
       
     </div>
  );
}

export default App;
