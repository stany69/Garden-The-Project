import './Catalog.css'

import {useEffect } from 'react'

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productsInStock } from '../../asyncAction/productsAsync'
import { baseUrl } from '../..'



export function Catalog(){

    let products =  useSelector(store => store.products.products)

    let dispatch = useDispatch()
  
    useEffect(() =>{dispatch(productsInStock())},[])


   
    return (
       <div className='allProducts-wrapper'>
         <h3 className='catalog_head'>All Products</h3>
          <div className='fetch_info'>
               {products.map(elem =>
                <Link to = {'/item/'+elem.id} className = 'sales_link' >
                <div key={elem.id} className='all_categ-photos'>
                   
                    
                      <img  className='all_photos-div catalog_photo' src={baseUrl + elem.image} alt= 'photo'/>
                      <div className='oneCategory_prices' >
                          <p className='discount_price'>{elem.discont_price} €</p>
                          <p className='orig_prices'>{elem.price} €</p>
                          <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                      </div>
                      <h4 className='cat_title'>{elem.title}</h4>
                </div>
                </Link>
                )}
          </div>
         
       </div>
    )}