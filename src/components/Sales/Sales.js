import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Link, useParams} from 'react-router-dom'
import { fetchAllSalesProductsList } from '../../asyncAction/productsAsync'
import { addItemAction } from '../../Store/basketReducer'

import './Sales.css'


function Sales() {

//     const [products,setProducts] = useState([])
    
    

// useEffect(() =>{
//      let url = 'http://localhost:3333/products/all'
//       fetch(url)
//        .then( res => res.json())
//        .then( data => setProducts(data))
// },[])
const products =  useSelector(store => store.products.products).filter(elem => {
    if(elem.price>elem.discont_price){
        return elem
        

        
    }
})

const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchAllSalesProductsList())
    }, [])

   
function threeProducts(products){

    return products.slice(0,3)
 }

 let newThreeProducts = threeProducts(products)

   

    return (
      <div className='sales_wrapper' id='sales'>
        <section className='sales_sec'>
            
            <h3 className='sales_head'>Sales</h3>
            
            
            <div className='sales_content'>
               {newThreeProducts.map(elem =>
               <Link to = {'/item/'+elem.id} className = 'sales_link' >
                 <div key={elem.id} className='sales_products'>
                 
                  <img className='sales_img' width={300} height={280} src={`http://localhost:3333${elem.image}`} alt=''/>
                  <div className='prices_sales'>
                    <p className='discount_price'>{elem.discont_price} €</p>
                    <p className='orig_prices'>{elem.price} €</p>
                    <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                  </div>
                  <h4 className='product_title'>{elem.title}</h4>
             
                 </div>
                 </Link>
               )}
          
          
            </div> 
         </section>

          
      </div>
    );
  }
  
  export default Sales;