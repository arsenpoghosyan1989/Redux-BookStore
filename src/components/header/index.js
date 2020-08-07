import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ numItems, total, title }) => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Link to="/">
              <div className="btn btn-default btn-sm">
                <i className="fas fa-home"></i> Home
              </div>
            </Link>
          </div>
          <div className="col-sm-4 text-center headerTitle">
            <h2>{title}</h2>
          </div>
          <Link to="/cart" className="col-sm-4 text-right cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="itemsInCart">{numItems} items</span>
            <span className="total">({total})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
