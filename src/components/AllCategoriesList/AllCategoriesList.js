
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../..';
import { fetchCategoriesList } from '../../asyncAction/categories';
import './AllCategoriesList.css'




 export function AllCategoriesList(){


    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchCategoriesList())
    }, [])
    



 return(

        <div className='allCategories_wrapper'>
            <h3 className='allCategories_head'>All Categories</h3>
            <div className='allCategories_div'>
              {categories.map( elem =>
           
               <Link className='allCategories_link' key = {elem.id} to={`/allCategoriesList/${elem.id}`}>
                 <div className='allCategories_content'>
                    <img width={318} height={350} src ={baseUrl + elem.image}/>
                    <h4 className='allCategories_titles'>{elem.title}</h4>
                 </div>
              </Link>
             
             )}
           </div>
        </div>
    )
 }