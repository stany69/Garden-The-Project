import Logo from "../media/logo.png";
import Basket from "../media/basket.png";
import "./Header.css";
import { productsInStock } from "../../asyncAction/productsAsync";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";





function Header() {

  const basket = useSelector((store) => store.basket.basket);

  let dispatch = useDispatch();

  //useEffect(() =>{dispatch(productsInStock())},[])

  useEffect(() => {
    dispatch(productsInStock());
  }, []);

  

  return (
    <div className="header_wrapper">
      <div className="left_side-header">
        <a href="/">
          <img className="logo" alt="logo" src={Logo}></img>
        </a>
        <Link className="link_btn" to={"/catalog"}>
          <button className="cat_but"> Catalogue</button>
        </Link>
      </div>

      <nav className="nav_menu">
        <ul className="header_list">
          <li className="">
            <a className="nav_list" href="/#categories">
              Categories
            </a>
          </li>
          <li>
            <a className="nav_list" href="/#coupon">
              Coupon
            </a>
          </li>
          <li>
            <a className="nav_list" href="/#sales">
              Sales
            </a>
          </li>
          <li>
            <a className="nav_list" href="/#contacts">
              Contacts
            </a>
          </li>
          <Link to="/basket">
            <p className="basket_count">
              <img className="basket_pic" alt="basket_pic" src={Basket} />
              {`${basket.reduce((sum, value) => sum + value.count, 0)}`}
            </p>
          </Link>
        </ul>
        <div class="hamburger__menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__button" for="menu__toggle">
            <span></span>
          </label>
          <ul class="hamburger__menu-items">
            <li class="hamburger__menu-list">
              <a href="/#categories" class="header__menu-link">
                CATEGORIES
              </a>
            </li>
            <li class="hamburger__menu-list">
              <a href="/#coupon" class="header__menu-link">
                COUPON
              </a>
            </li>
            <li class="hamburger__menu-list">
              <a href="/#sales" class="header__menu-link">
                SALES
              </a>
            </li>

            <li class="hamburger__menu-list">
              <a href="/#contacts" class="header__menu-link">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
