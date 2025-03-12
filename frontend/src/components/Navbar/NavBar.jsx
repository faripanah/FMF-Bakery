import logo from '../assets/Images/bakerylogo.png';
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = false;
    const isAdmin = true;
    return(
        <header className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Bakery Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/" >Menu</Link></li>
                    <li><Link to="/" >Contact Us</Link></li>
                    <li><Link to="/" >Find Store</Link></li>
                  
                </ul>
                {isAdmin && <Link to={"/secret-dashboard"}> Dashboard </Link>}
               
            </nav>
              {/* Icons Section */}
              <div className="icons">
                  
                    <FaSearch />
                    <FaCartShopping />
                    <Link to="/signup"><FaUserLarge /></Link>
                </div>



        </header>
    )
}
export default Navbar;
