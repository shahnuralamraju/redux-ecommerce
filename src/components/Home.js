import React from 'react'
import Header from "./Header"
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import HomeCard from './HomeCard';

const Home = () => {

    const { products } = useSelector(state => state.allProducts)

    return (
        <div style={{overflow:"hidden"}}>
            <Header />
            <ToastContainer />
            <div className="container">
                <div className="row">
                    {
                        products.map(product => <HomeCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
