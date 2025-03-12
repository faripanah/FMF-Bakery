/*import  { useContext, useState } from 'react';
import logo from '../../assets/Images/bakerylogo.png'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import Cart from '../cart/Cart';
const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate(); 
    //const[isSubMenuVisible, setIsSubMenuVisible] = useState(false);

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
            </nav>
              
              <div className="icons">
                  
                    <i className="fas fa-search" title="Search"> </i>

                    <i className="fas fa-shopping-cart" title="Cart"
                    onClick={() => {
                        console.log("🛒 Cart Icon Clicked!");
                        setShowCart(!showCart);
                      }}
                      title="Cart">
                      >
                      ({cartItems.length})  
                    
                    </i>
                    <Link to="/signup"><i className="fas fa-user" title="User"></i></Link>
                </div>

                    {showCart && <Cart setShowCart={setShowCart} />}

        </header>
    )
}
export default Navbar;
*/
/*import  { useContext, useState } from 'react';
import logo from '../../assets/Images/bakerylogo.png';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import Cart from '../cart/Cart';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(CartContext);  // ✅ Get cart items
    const navigate = useNavigate(); 

    return (
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
            </nav>

            
            <div className="icons">
                <i className="fas fa-search" title="Search"></i>

                
                <i className="fas fa-shopping-cart" 
                    onClick={() => {
                        console.log("🛒 Cart Icon Clicked!");
                        setShowCart(!showCart);
                    }}
                    title="Cart">
                    ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) 
                </i>

                <Link to="/signup">
                    <i className="fas fa-user" title="User"></i>
                </Link>
            </div>

            
            {showCart && <Cart setShowCart={setShowCart} />}
        </header>
    )
}

export default Navbar;*/
import  { useContext, useState } from 'react';
import logo from '../../assets/Images/bakerylogo.png';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import Cart from '../cart/Cart';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(CartContext);  // ✅ Get cart items
    const navigate = useNavigate(); 

    return (
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
            </nav>

            {/* Icons Section */}
            <div className="icons">
                <i className="fas fa-search" title="Search"></i>

                {/* 🛒 Shopping Cart Icon (with item count) */}
                <i className="fas fa-shopping-cart" 
                    onClick={() => {
                        console.log("🛒 Cart Icon Clicked!");
                        setShowCart(!showCart);
                    }}
                    title="Cart">
                    ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) 
                </i>

                <Link to="/signup">
                    <i className="fas fa-user" title="User"></i>
                </Link>
            </div>

            {/* 🛒 Show Cart when clicked */}
            {showCart && <Cart setShowCart={setShowCart} />}
        </header>
    )
}

export default Navbar;
