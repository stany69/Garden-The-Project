
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import './Categories.css'
import { baseUrl } from '../..';
import { fetchCategoriesList } from '../../asyncAction/categories';



function Categories() {

    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchCategoriesList())
    }, [])







     function fourCategories(categories){
        return categories.slice(0,4)
     }

     let newCategories = fourCategories(categories)




    return (
      <div className='categories_wrapper'>
      
          <section className='categories_sec'>
            <div className='cat_text-div'>
              <h3 className='cat_text'>Categories</h3>
              <Link to={'/allCategoriesList'}>
                 <button className='all_cat-button'>All Categories</button>
              </Link>
            </div>

            <div className='fetch_info'>
                 {newCategories.map(elem =>
                  <div className='all_categ-photos'>
                     
                      <h4 className='cat_title'>{elem.title}</h4>
                      <img width={318} height = {350} className='all_photos-div' src={`http://localhost:3333${elem.image}`} alt= 'photo'/>
                  </div>
                  )}
            </div>
             
         </section>

          
      </div>
    );
  }
  
  export default Categories;