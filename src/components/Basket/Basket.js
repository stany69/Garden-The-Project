

import {  useSelector } from 'react-redux'
import './Basket.css'




 function Basket(){

    const basket = useSelector(store => store.basket.basket)

    

      return(
        <div className='basket_wrapper'>
           
                 <div className='basket_content'>
                    <h3>Basket</h3>
                    <p>Home/All Products</p>
                    <p>Back to store</p>
                    <div className='map_wrapper'>
                      {basket.map( elem =>
                        <div className='basket_element'>
                          <img src={elem.image} className='' alt=''/>
                          <h4>{elem.title}</h4>
                          <p>{elem.price}</p>
                          <p>{elem.discont_price}</p>
                        
                        </div>
                        )}
                    </div>
                 </div>
                 <div className='order_details-block'>
                    <h4>Order Details</h4>
                    <h6>Total:</h6>

                 </div>
           
        </div>
    )
}

export default Basket