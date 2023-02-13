import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {Link, useParams} from 'react-router-dom'

import './Sales.css'


function Sales() {

    const [products,setProducts] = useState([])
    let {id} = useParams()

useEffect(() =>{
     let url = 'http://localhost:3333/products/all'
      fetch(url)
       .then( res => res.json())
       .then( data => setProducts(data))
},[])

   
function threeProducts(products){
    return products.slice(0,3)
 }

 let newThreeProducts = threeProducts(products)

   

    return (
      <div className='sales_wrapper'>
        <section className='sales_sec'>
            <h3 className='sales_head'>Sales</h3>
            
            <div className='sales_content'>
               {newThreeProducts.map(elem =>
                 <div key={elem.id} className='sales_products'>
                  <img className='' width={319} height={276} src={`http://localhost:3333${elem.image}`} alt=''/>
                  <div className='prices_sales'>
                    <p className='discount_price'>{elem.discont_price} €</p>
                    <p className='orig_prices'>{elem.price} €</p>
                    <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                  </div>
                  <h4 className='product_title'>{elem.title}</h4>
             
                 </div>
              
               )}
          
          
            </div> 
         </section>

          
      </div>
    );
  }
  
  export default Sales;