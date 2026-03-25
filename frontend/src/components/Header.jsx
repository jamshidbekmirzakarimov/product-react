import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                ProShop
            </Link>
            <nav>
                <Link to="/">
                    Barcha Mahsulotlar
                </Link>
                <Link to="/AddProduct">
                    Mahsulot Qo'shish
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to={'/cart'}>
                    🛒
                </Link>
            </nav>
        </header>
    );
};

export default Header;