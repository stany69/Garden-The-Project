
import { useSelector,useDispatch } from "react-redux";

import { fetchOneProduct } from "../../asyncAction/productsAsync";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { baseUrl } from '../..';
import './Item.css'
import { addItemAction } from "../../Store/basketReducer";


export function Item(){
    let {id} = useParams()
    let dispatch = useDispatch()
    const oneProduct = useSelector(store => store.item.item)

  
    useEffect(() =>{
        dispatch(fetchOneProduct(id))
        
      },[])

    //   console.log(oneProduct)

    
   
    return(

        <div className= "one_product-wrapper" >
          
               <div key={oneProduct?.id} className="one_product-content" > 
                    <h4 className="oneProduct_title">{oneProduct?.title}</h4>
                    <div className="father_ofTwo">
                        <div className="img_container"  >
                           <img className='' width={600} height={600} src={`${baseUrl}${oneProduct?.image}`} alt=''/>
                         </div>
                        
                        <div className="descr_container">
                          <div className="prices">
                            
                              <p className='discount_price item_d-price'>{oneProduct?.discont_price} €</p>
                              <p className='orig_prices item_or-price'>{oneProduct?.price} €</p>
                              <p className='percentage item_percentage'>{Math.round(((oneProduct?.price-oneProduct?.discont_price)/(oneProduct?.price))*100)} %</p>
                           </div>

                           <button className="item_btn" onClick={() => dispatch(addItemAction(oneProduct))}>Add to Basket</button>
                           <span className="item_span"></span>
                           <p className="item_descr">{oneProduct.description}</p>
                        </div>
                    </div>
                </div>
               
        

        </div>

    )
}