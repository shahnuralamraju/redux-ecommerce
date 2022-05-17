import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { addToCart, decreaseQty, increaseQty } from '../allRedux/actions/CartAction';
import { ToastContainer } from 'react-toastify';
import { getProduct } from '../allRedux/actions/ProductAction';

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.allProducts);
    const { cart } = useSelector(state => state.cart);
    const isStayCart = cart.find(prd => prd.id === Number(id));

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id])

    return (
        <div className="container mt-100">
            <ToastContainer />
            <div className="row">
                <div className="col-6">
                    <div style={{ width: "550px" }} className="details__image">
                        <img src={`/images/${product.image}`} alt="prdimg" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__prices">
                        <span className="details__actaul">{currencyFormatter.format(product.price, { code: 'BDT' })}</span>
                        <span className="details__discount">{currencyFormatter.format(product.discountPrice, { code: 'BDT' })}</span>

                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                            <span onClick={() => dispatch(decreaseQty(product.id))} className="dec"><BsDash /></span>
                            <span className="quantity">
                                {isStayCart?(isStayCart.quantity):(product.quantity)}
                            </span>
                            <span onClick={() => dispatch(increaseQty(product.id))} className="inc"><BsPlus /></span>

                            {
                                !isStayCart
                                    ?
                                    <button onClick={() => dispatch(addToCart(product))} className="btn-default"  >add to cart</button>
                                    :
                                    <button style={{ padding: "0.9em" }} className="btn-default">
                                        <Link style={{ color: "white", }} to="/cart">
                                            Go to cart
                                        </Link>
                                    </button>
                            }
                        </div>
                    </div>
                    <div className="details__p">
                        <h4>Details</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
