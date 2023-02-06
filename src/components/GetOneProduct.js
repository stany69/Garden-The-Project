import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useSelector,useDispatch } from "react-redux";

import { fetchOneProduct } from "../asyncAction/productsAsync";
import { useParams } from "react-router-dom";



export function GetOneProduct(){

    let oneProduct = useSelector(store =>store. oneProduct.oneProduct)
    let dispatch = useDispatch()
    let {id} = useParams()

    return(

        <div className="one_product-wrapper">
            <Header/>
               <div className="one_product-content" > 
                    <h3>{oneProduct.title}</h3>
                    <button onClick={(dispatch(fetchOneProduct()))}>GET PRODUCT</button>
                </div>
               
            <Footer/>

        </div>

    )
}