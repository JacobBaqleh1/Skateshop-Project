import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>

          <Link to="/wishlist">
            <Heart size={32} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
      <div className="secondNavbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>

          <Link to="/wishlist">
            <Heart size={32} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
