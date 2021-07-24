import React from 'react';
import Carousel from 'react-elastic-carousel';
import ImageSlider from './ImageSlider';

const Images = () => {
    return (
        <>
    <Carousel>
        <ImageSlider images="images/img1.jpg" />
        <ImageSlider images="/images/img2.jpg" />
        <ImageSlider images="/images/img3.jpg" />
        <ImageSlider images="/images/img4.jpg" />
        <ImageSlider images="/images/img5.jpg" />
        <ImageSlider images="/images/img6.jpg" />
        <ImageSlider images="/images/img7.jpg" />
        <ImageSlider images="/images/img8.jpg" />
        <ImageSlider images="/images/img9.jpg" />
        <ImageSlider images="/images/img10.jpg" />
        <ImageSlider images="/images/img11.jpg" />
        <ImageSlider images="/images/img12.jpg" />
        <ImageSlider images="/images/img13.jpg" />
        <ImageSlider images="/images/img14.jpg" />
    </Carousel>
        </>
    )
}

export default Images;
