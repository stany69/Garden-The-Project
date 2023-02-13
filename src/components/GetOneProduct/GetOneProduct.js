
import { useSelector,useDispatch } from "react-redux";

import { fetchOneProduct } from "../../asyncAction/productsAsync";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { baseUrl } from '../..';
import './GetOneProduct.css'


export function GetOneProduct(){
    let {id} = useParams()
    let dispatch = useDispatch()
    const oneProduct = useSelector(store => store.oneProduct.oneProduct)

  
    useEffect(() =>{
        dispatch(fetchOneProduct(id))
        
      },[])

      console.log(oneProduct)

    
   
    return(

        <div className= "one_product-wrapper" >
            {oneProduct.map( elem =>
               <div key={elem.id} className="one_product-content" > 
                    <h3>{elem.title}</h3>
                    <img className='' width={119} height={176} src={baseUrl + elem.image} alt=''/>
                    <button onClick={(dispatch(fetchOneProduct()))}>Add to Basket</button>
                    <p className='discount_price'>{elem.discont_price} €</p>
                    <p className='orig_prices'>{elem.price} €</p>
                    <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                </div>
               
            )}

        </div>

    )
}