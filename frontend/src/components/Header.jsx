import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                ProShop
            </Link>
            <nav>
                <NavLink to="/allProducts">
                    Barcha Mahsulotlar
                </NavLink>
                <NavLink to="/AddProduct">
                    Mahsulot Qo'shish
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;