import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategoriesList, fetchOneCategory } from "../../asyncAction/categories"




function OneCategory(){

    const {id} = useParams()

const category = useSelector( store => store.category.category)
const categories = useSelector(store => store.categories.categories).find(elem => elem.id == id)
const dispatch = useDispatch()

useEffect(() =>{
  dispatch(fetchOneCategory(id))
  dispatch(fetchCategoriesList())
},[])


 console.log(categories)
     return(
        <div>
            <h4>{categories?.title}</h4>
             {category.map( elem =>
             <div key={elem.id} className='sales_products'>
             <img className='' width={319} height={276} src={baseUrl + elem.image} alt=''/>
             <div className='prices_sales'>
               <p className='discount_price'>{elem.discont_price} €</p>
               <p className='orig_prices'>{elem.price} €</p>
               <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
             </div>
             <h4 className='product_title'>{elem.title}</h4>
        
            </div>
             )}
        </div>
     )
}



export default OneCategory