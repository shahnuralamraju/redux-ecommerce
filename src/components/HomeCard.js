import React from 'react';
import { addToCart, removeToCart } from '../allRedux/actions/CartAction';
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const HomeCard = ({ product }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const isStayCart = cart.find(prd => prd.id === Number(product.id));

    return (
        <div className="col-3">
            <div className="product">
                <div className="product__img">
                    <Link to={`/details/${product.id}`}>
                        <img src={`/images/${product.image}`} alt="productImage" />
                    </Link>
                </div>
                <div className="product__name">
                    {product.name}
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="product__price">
                            <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'BDT' })}</span> <span className="discount">{product.discount}%</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product__discount__price">
                            {currencyFormatter.format(product.discountPrice, { code: 'BDT' })}
                        </div>

                    </div>

                    {
                        isStayCart ?
                            <button onClick={() => dispatch(removeToCart(product.id))}
                                style={{ padding: "8px" }} className='btn-default'>Remove From cart
                            </button>
                            :
                            <button onClick={() => dispatch(addToCart(product))}
                                style={{ padding: "8px" }} className='btn-default'>Add to Cart
                            </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default HomeCard;