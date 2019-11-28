import React from 'react';
import imgBanner from '../../img/banner.jpg'

function Banner(){
    return(
        <div className="banner">
            <img src={imgBanner} className="banner" alt="banner da página" />
        </div>
    )
}
export default Banner;