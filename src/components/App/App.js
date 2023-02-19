import "./App.css";
import {  Routes, Route } from "react-router-dom";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import NewSeasonSale from "../NewSeasonSale/NewSeasonSale";
import Sales from "../Sales/Sales";
import Categories from "../Categories/Categories";
import Coupon from "../Coupon/Coupon";


import "@fontsource/montserrat";
import { Catalog } from "../Catalog/Catalog";
import { Item} from "../Item/Item"

import { AllCategoriesList } from "../AllCategoriesList/AllCategoriesList";
import OneCategory from "../OneCategory.js/OneCategory";
import NotFound from "../NotFound/NotFound";
import Basket from "../Basket/Basket";




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
                 <Route path="/item/:id" element = {<Item/>}/>
                 <Route path="*" element = {<NotFound/>}/>
            </Routes>
         <Footer/>
    
       
     </div>
  );
}

export default App;
