import React from "react"
import Slider from "react-slick"
import "./slider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Project1 from "./../assets/e-commerce-project.jpg"
import Project2 from "./../assets/space-project.jpg"
import Project3 from "./../assets/charitio-project.jpg"

export default function CenterMode() {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "60px",
        slidesToShow: 1,
        arrows: false
    }

    return (
        <div className="slider-container">
        <Slider {...settings}>
            <div className="slider-img">
                <img src={Project1} alt="Project1"/>
            </div>
            <div className="slider-img">
                <img src={Project2} alt="Project1"/> 
            </div>
            <div className="slider-img">
                <img src={Project3} alt="Project1"/>
            </div>
        </Slider>
        </div>
    )
}