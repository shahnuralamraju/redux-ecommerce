import React from 'react'
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, removeToCart } from '../allRedux/actions/CartAction';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const totalPrice = cartProducts.reduce((preTotal, item) => preTotal + (item.discountPrice * item.quantity), 0);
    const totalQuantities = cartProducts.reduce((preQty, item) => preQty + item.quantity, 0);

    return (
        <div className="cart">
            <div className="container">
                <ToastContainer />
                {cartProducts?.length > 0 ? <>
                    <h3>Your cart</h3>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Product Name</div>
                                    <div className="col-2 textALign">Price</div>
                                    <div className="col-2 textALign">Inc/Dec</div>
                                    <div className="col-2 textALign">Total Price</div>
                                    <div className="col-2 textALign">Remove</div>
                                </div>
                            </div>
                            {cartProducts.map(product => (
                                <div className="row align__center" key={product.id}>
                                    <div className="col-2 mblCartimg">
                                        <Link to={`/details/${product.id}`}>
                                            <div className="cart__image">
                                                <img src={`/images/${product.image}`} alt="cart__image" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__price textALign">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec">
                                                <span onClick={() => dispatch(decreaseQty(product.id))} className="dec"><BsDash /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span onClick={() => dispatch(increaseQty(product.id))} className="inc" ><BsPlus /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div onClick={() => dispatch(removeToCart(product.id))} className="cart__remove">
                                            <BsReverseBackspaceReverse />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    Summary
                                </div>
                                <div className="summary__details">
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Items:
                                        </div>
                                        <div className="col-6">{totalQuantities}</div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price
                                        </div>
                                        <div className="col-6">
                                            {currencyFormatter.format(totalPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <button type="button" className="checkout">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> :
                    <div className='cartImgdiv'>
                        <h2>Your Cart is Empty</h2>
                        <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
                        <Link to={"/"} ><h2>Back To Shopping</h2></Link>
                    </div>}
            </div>
        </div>
    )
}

export default Cart;
