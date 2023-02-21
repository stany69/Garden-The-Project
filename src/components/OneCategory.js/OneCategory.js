import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategoriesList, fetchOneCategory } from "../../asyncAction/categories"
import { FilterProductsAction, filterProductsPriceAction, SortProductsAction } from "../../Store/allProductsReducer"
import { addItemAction } from "../../Store/basketReducer"
import './OneCategory.css'



function OneCategory(){

    const {id} = useParams()
    const formRef = useRef()
    const location = useLocation()

const category = useSelector( store => store.category.category)
const categories = useSelector(store => store.categories.categories).find(elem => elem.id == id)
const basket = useSelector(store => store.basket.basket)
const dispatch = useDispatch()

useEffect(() =>{
  dispatch(fetchOneCategory(id))
  dispatch(fetchCategoriesList())
  
  setTimeout(() => {
    dispatch(FilterProductsAction(location.state))
},100)

},[])

function setMinMaxPrice(e){
    console.log(formRef, e.target)
    if (e.code == 'Enter'){
        console.log('etst')
        let data = new FormData(formRef.current)
        data = Object.fromEntries(data)
        data.max_price = (!data.max_price) ? Infinity : data.max_price
        data.min_price = (!data.min_price) ? -Infinity : data.min_price
        dispatch(filterProductsPriceAction(data))
    }
}

  console.log(category)

     return(
        <div className="oneCategory_wrapper">
            <h3 className="oneCategory_head">{categories?.title}</h3>
               <div className="oneCategory_inputs">
                <div className="form_cat">
                    <div className="price_div">
                    <form className="price_form" ref={formRef} onKeyDown={(e) => setMinMaxPrice(e)}>
                           <label className="price_label inputs_text">Price</label>
                           <input className="price_felds" name='min_price' type='number' placeholder = 'from'></input>
                           <input className="price_felds" name="max_price" type='number' placeholder = 'to'></input>
                     </form>
                     </div>
                     <div className="salesOnly_div">
                        <label className="sales_label inputs_text">Sales Only</label>
                        <input className="sales_check" type='checkbox'></input>
                    </div>
                    <div className="sortLabel_div">
                      <label className="sort_label inputs_text">Sort:</label>
                    
                       <select className="select_options" onChange={(e) => dispatch(SortProductsAction(e.target.value))}>
                         <option value={0}>----------</option>
                         <option value={1}>By Increase</option>
                         <option value={2}>By Decrease</option>
                         <option value={3}>Alphabetical</option>
                       </select>
                    </div>
                </div>
                
               </div>
            <div className="oneCategory_content">
                  {category.map( elem =>
                    <div key={elem.id} className='sales_products oneCategory_product'>
                       
                       <div className="img_item">
                      
                          <img className='item_photo' width={319} height={276} src={baseUrl + elem.image} alt=''/>
                        </div>
                   <div className="btn_item">
                     
                         <button onClick={() => dispatch(addItemAction(elem))} className="oneCategory_btn">Add to Basket</button>
                     
                   </div>
                   <Link className="to_item-link" to={'/item/'+elem.id}>
                  <div className='prices_sales oneCategory_prices' >
                    <p className='discount_price'>{elem.discont_price} €</p>
                    <p className='orig_prices'>{elem.price} €</p>
                    <p className='percentage'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                  </div>
                  <h4 className='product_title'>{elem.title}</h4>
                  
                  </Link>
                 </div>
                  )}
             </div>
        </div>
     )
}



export default OneCategory