
import './NewSeasonSale.css'
import Garden from '../media/dec_garden.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSalesProductsList } from '../../asyncAction/productsAsync';

import { useEffect } from 'react';




function NewSeasonSale() {

    const data = useSelector(store => store.products.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchAllSalesProductsList())
    }, [])


    return (
      <div className='ns_sale-wrapper'>
       
            <section className='ns_sale-content'>
                  <div className='left_side'>
                  
                      <h2> New Season </h2>
                      <h1>Sale</h1>
                      <Link to={'/onlySales'}>
                           <button  className='all_sales-but'>All Sales</button>
                      </Link>
                     
                      <button className='details_but'>Details</button>
                  </div>
                  <div className='right_side'>
                       <img className='dec_garden' src={Garden} alt='dec_garden'/>
                  </div>
             </section>
           
        </div>
    );
  }
  
  export default NewSeasonSale;