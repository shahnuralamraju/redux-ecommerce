import React from 'react'
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Nav = () => {
    const cartProducts = useSelector(state => state.cart.cart);

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;