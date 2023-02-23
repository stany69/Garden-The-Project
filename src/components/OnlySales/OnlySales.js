
import { useSelector } from 'react-redux'
import './OnlySales.css'


export function OnlySales(){


    const products =  useSelector(store => store.products.products).filter(elem => {
        if(elem.price>elem.discont_price){
            return elem
            
    
            
        }
    })



    return(
   
         <div>
            <h3 className='all_sales-head'>All Sales</h3>
            <div className='fetch_info onlySales_wrapper'>
                {products.map(elem =>
                <div key={elem.id} className='sales_products'>
                    <img className='sales_img' width={280} height={260} src={`http://localhost:3333${elem.image}`} alt=''/>
                  <div className='prices_sales block_info' >
                    <div className='sales_price-info'>
                    <p className='discount_price'>{elem.discont_price} €</p>
                    <p className='orig_prices'>{elem.price} €</p>
                    <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                    </div>
                    <h4 className='cat_title'>{elem.title}</h4>
                </div>
                </div>
                    )}
            </div>
             
         </div>
         
   
)
}