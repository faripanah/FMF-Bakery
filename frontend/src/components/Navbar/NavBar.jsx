import logo from '../../assets/Images/bakerylogo.png';
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
    const user = false;
    const isAdmin = true;
    return(
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Bakery Logo" />
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/menu" >Menu</Link></li>
                    <li><Link to="/contact" >Contact Us</Link></li>
                    <li><Link to="/find-shop" >Find Store</Link></li>
                </ul>
                {isAdmin && <Link to={"/secret-dashboard"}> Dashboard </Link>}
            </nav>
            {/* Icons Section */}
            <div className={styles.icons}>
                <FaSearch />
                <FaCartShopping />
                <Link to="/signup"><FaUserLarge /></Link>
            </div>
        </header>
    );
};

export default Navbar;
