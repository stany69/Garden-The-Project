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

function App() {
  return (
    <div>
      <Header />
      <NewSeasonSale />
      <Categories />
      <Router>
      <Coupon/>
      <Sales />
      <Footer/>
     
        <Routes>
          
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
