import React from 'react';
import "./style.css";

const ImageSlider = ({images}) => {
    return (
        <>
        <div className="slider">
        <img src={images} alt="cricket images" />
        </div>
        </>
    )
}

export default ImageSlider;
