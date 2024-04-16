import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameLogin, setbtnNameLogin] = useState("Login");

    return(
        <div className="header">
        <div className="logoContainer">
            <img src="E:/Project/ReactLearning/download.png" className="logo"/>
        </div>
    <div className="nav-items">
        <ul className="nav-items-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" 
            onClick={()=>{
                btnNameLogin == "Login" ? setbtnNameLogin("Logout") : setbtnNameLogin("Login")
            }
        }
            >{btnNameLogin}</button>
        </ul>
    </div>
    </div>
    );
};

export default Header;