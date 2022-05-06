import React from 'react'
import Slider from "react-slick";
import { demoData } from './demoData';

const Header = () => {

    const options = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <Slider {...options}>
            {
                demoData.map(data =>
                    <div key={data.name} className="header" >
                        <img src={`${data.url}`} alt="img" />
                    </div>
                )
            }

        </Slider>
    )
}

export default Header;
