import Logo from '../media/logo.png'
import Basket from '../media/basket.png'
import './Header.css';
import { productsInStock } from '../../asyncAction/productsAsync';
import { useDispatch ,useSelector} from 'react-redux';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';





function Header() {

    const basket = useSelector(store => store.basket.basket)

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
               <button    className='cat_but'> Catalogue</button>
           </Link>
        </div>
        
        <nav className='nav_menu'>     
         <ul className='header_list' >
            <li className=''>
               <a className='nav_list' href='/#categories'>Categories</a>
           </li>
           <li>
               <a className='nav_list' href ='/#coupon'>Coupon</a>
           </li>
           <li>
               <a className='nav_list'  href = '/#sales'>Sales</a>
           </li>
           <li>
               <a className='nav_list' href ='/#contacts'>Contacts</a>
           </li>
           <Link to='/basket'>
            <img className='basket_pic'
             alt='basket_pic' 
             src={Basket} />
             <p className='basket_count'>{`${basket.reduce((sum,value)=>sum+value.count,0)}`}</p>
             </Link>
         </ul>
        </nav>
    

   
    
</div>
  );
}

export default Header;
