import React, { Component } from 'react'
import SlickSlider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Slider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      arrows : true,
      slidesToScroll: 2
    };
    return (
      <SlickSlider {...settings}>
        {this.props.elements}
      </SlickSlider>
    )
  }
}
