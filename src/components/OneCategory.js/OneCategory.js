import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategoriesList, fetchOneCategory } from "../../asyncAction/categories"
import './OneCategory.css'



function OneCategory(){

    const {id} = useParams()

const category = useSelector( store => store.category.category)
const categories = useSelector(store => store.categories.categories).find(elem => elem.id == id)
const dispatch = useDispatch()

useEffect(() =>{
  dispatch(fetchOneCategory(id))
  dispatch(fetchCategoriesList())
},[])

  console.log(category)

     return(
        <div className="oneCategory_wrapper">
            <h3 className="oneCategory_head">{categories?.title}</h3>
            <div className="oneCategory_inputs">
                
                
            </div>
            <div className="oneCategory_content">
             {category.map( elem =>
             <div key={elem.id} className='sales_products oneCategory_product'>
             <img className='' width={319} height={276} src={baseUrl + elem.image} alt=''/>
             <Link to = '/getOneProduct' >
             <button className="oneCategory_btn">More Details</button>
             </Link>
             <div className='prices_sales oneCategory_prices' >
               <p className='discount_price'>{elem.discont_price} €</p>
               <p className='orig_prices'>{elem.price} €</p>
               <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
             </div>
             <h4 className='product_title'>{elem.title}</h4>
        
            </div>
             )}
             </div>
        </div>
     )
}



export default OneCategory