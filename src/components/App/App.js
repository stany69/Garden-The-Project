
import './App.css';
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import { useSelector ,useDispatch} from "react-redux";
import {Provider} from 'react-redux'
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import NewSeasonSale from '../NewSeasonSale/NewSeasonSale';
import Sales from '../Sales/Sales';
import Categories from '../Categories/Categories';
import Coupon from '../Coupon/Coupon';


function App() {
  return (
    
      <div >
         <Header/>
         <NewSeasonSale/>
         <Categories/>
         <Coupon/>
         <Sales/>
         <Footer/>
     </div>
  );
}

export default App;
