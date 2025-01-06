import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{basket}] = useStateValue();
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img className="header__logo" src="/images.jpeg" alt="Logo" />
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Search Product"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links  */}
      <div className="header__nav">
        {/* Link 1 */}
        <Link to="login " className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign Up </span>
          </div>
        </Link>

        {/* Link 2 */}
        <Link to="/ " className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* Link 3 */}
        <Link to="/ " className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* Link 4 */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket"></div>
          {/* Shopping Basket Icon */}
          <ShoppingBasket />

          {/* Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}
