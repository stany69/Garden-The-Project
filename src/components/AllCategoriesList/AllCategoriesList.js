
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

        <div>
           {categories.map( elem =>
             <Link key = {elem.id} to={`/allCategoriesList/${elem.id}`}>
                <div>
                  <img width={150} height={150} src ={baseUrl + elem.image}/>
                  <p>{elem.title}</p>
                </div>
             </Link>
           )}
        </div>
    )
 }