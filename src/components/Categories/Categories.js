
import { useState,useEffect } from 'react'

import {Link, useParams} from 'react-router-dom'
import './Categories.css'

function Categories() {

    const [categories,setCategories] = useState([])
    let {id} = useParams()

useEffect(() =>{
     let url = 'http://localhost:3333/categories/all'
      fetch(url)
       .then( res => res.json())
       .then( data => setCategories(data))
},[])







     function fourCategories(categories){
        return categories.slice(0,4)
     }

     let newCategories = fourCategories(categories)




    return (
      <div className='categories_wrapper'>
          <section className='categories_sec'>
            <div className='cat_text-div'>
              <h3 className='cat_text'>Categories</h3>
              <button className='all_cat-button'>All Categories</button>
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