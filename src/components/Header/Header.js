import Logo from '../media/logo.png'
import Basket from '../media/basket.png'
import './Header.css';
import { productsInStock } from '../../asyncAction/productsAsync';
import { useDispatch ,useSelector} from 'react-redux';
import { AllProductsAction } from '../../Store/allProductsReducer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import { Catalog } from '../App/Catalog/Catalog';



function Header() {

    let products =  useSelector(store => store.products.products)

  let dispatch = useDispatch()

  //useEffect(() =>{dispatch(productsInStock())},[])
  useEffect(() => {
    dispatch(productsInStock())
 },[])


  return (
    <div className="header_wrapper">
         <div className='left_side-header'>
            <a href='/'><img className='logo' alt='logo' src={Logo}></img></a>
            <Link className='link_btn' to ={'/catalog'}>
               <button  onClick={() => dispatch( Catalog())}  className='cat_but'> Catalogue</button>
           </Link>
        </div>
        
        <nav className='nav_menu'>     
         <ul className='header_list' >
            <li className=''>
               <p className='nav_list'>Categories</p>
           </li>
           <li>
               <a className='nav_list' href ='#'>Coupon</a>
           </li>
           <li>
               <a className='nav_list'  href ='#'>Sales</a>
           </li>
           <li>
               <a className='nav_list' href ='#'>Contacts</a>
           </li>
           <a href='/'><img className='basket_pic' alt='basket_pic' src={Basket}></img></a>
         </ul>
        </nav>
    

   
    
</div>
  );
}

export default Header;
