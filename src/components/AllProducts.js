

import { useState,useEffect } from 'react'

import {Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productsInStock } from '../asyncAction/productsAsync'


export function AllProducts(){

    let products =  useSelector(store => store.products.products)

    let dispatch = useDispatch()
  
    useEffect(() =>{dispatch(productsInStock())},[])


   
    return (
       
        <div className='fetch_info'>
        {products.map(elem =>
         <div className='all_categ-photos'>
            
             <h4 className='cat_title'>{elem.title}</h4>
             <img width={50} height = {50} className='all_photos-div' src={`http://localhost:3333${elem.image}`} alt= 'photo'/>
         </div>
         )}
   </div>
    )}