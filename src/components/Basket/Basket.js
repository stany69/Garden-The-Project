
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsInStock } from '../../asyncAction/productsAsync'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { AddProductsAction, RemProductsAction,AddCountAction} from '../../Store/allProductsReducer'




import './Basket.css'

export function Basket(){

    let products = useSelector(store => store.products.products)

    let dispatch = useDispatch()

     useEffect(() => {
        dispatch(productsInStock())
     },[])



    return(
        <div className='basket_wrapper'>
            <Header/>
                 <div className='basket_content'>
                    <h3>Basket</h3>
                    <p>Home/Basket</p>
                    <p>Back to store</p>
                    {products.map( elem =>
                    <div className='basket_element'>
                       
                        <img src='' className='' alt=''/>
                        <h4>{elem.title}</h4>
                        <button onClick={()=> dispatch(RemProductsAction(elem.id))}>-</button>
                        <p>{elem.count}</p>
                        <button onClick={()=> dispatch(AddCountAction(elem.id))}>+</button>
                        <p>{elem.discont_price}</p>
                        <p>{elem.price}</p>
                        <div className='order'>
                            <p>Total:</p>
                            <p>{elem.price}</p>
                            <form action=''>
                                <label for = ''>Order Details</label>
                                <input type ='nomer' value={'Your phone number'}/>
                            </form>
                            <button onClick={()=> dispatch(AddProductsAction(prompt()))}>Add Goods</button>
                        </div>
                    </div>
)}
                 </div>
            <Footer/>
        </div>
    )
}