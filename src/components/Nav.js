import React from 'react'
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useColorMode, useColorModeValue,IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa'



const Nav = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    const { toggleColorMode } = useColorMode()
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
                        <IconButton
                            variant='ghost'
                            icon={useColorModeValue(<FaSun style={{fontSize:"20px"}}/>, <FaMoon style={{color:"red",fontSize:"20px"}} />)}
                            onClick={toggleColorMode}
                            aria-label='toggle-dark-mode'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;