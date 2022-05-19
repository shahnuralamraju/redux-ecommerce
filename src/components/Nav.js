import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { FaGalacticRepublic, FaMoon } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { themeData } from './demoData';

const Nav = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    const [theme, setTheme] = useState("light");
    const [hide, setHide] = useState(true);

    const getTheme = () => {
        const isTheme = localStorage.getItem("theme")
        if (isTheme) {
            let newTheme = JSON.parse(isTheme);
            setTheme(newTheme)
        }
    };

    const handleTheme = (seletedTheme) => {
        setTheme(seletedTheme);
        localStorage.setItem("theme", JSON.stringify(seletedTheme))
    }

    useEffect(() => {
        document.body.className = theme;
        getTheme();
    }, [theme])


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
                        <div onClick={() => setHide(!hide)}><h4 style={{cursor:"pointer"}}>{theme}</h4></div>
                        {
                            !hide &&
                            <div className='theme_container'>
                                {
                                    themeData.map(thm =>
                                        <div className='theme_div'
                                            style={{ background: thm.bgcolor }}
                                            key={thm.id}
                                            onClick={() => handleTheme(thm.name)}>
                                        </div>)
                                }
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;