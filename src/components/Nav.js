import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Nav = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    const [theme, setTheme] = useState("light-theme");

    const handleTheme = () => {
        if(theme === "dark-theme"){
            setTheme("light-theme")
        }else{
            setTheme("dark-theme")
        }
    }

    useEffect(()=>{
        document.body.className = theme ;
    },[theme])


    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="/images/cartjelly.png" alt="logo" /></Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                {cartProducts.length > 0 && <span>{cartProducts?.length}</span>}
                            </div>
                        </Link>
                        <div onClick={handleTheme}><h6>Toggle</h6></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;