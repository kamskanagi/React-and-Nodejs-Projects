import React, { Children } from 'react'
import Slider from "react-slick";
import Cards from '../cards/Cards'
import './slide.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }; 


    const data =[
        {
            id:1,
            title: " AI Artist",
            img: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: " Add the talent to Ai",
     
        },
        {
            id:2,
            title: " AI Artist",
            img: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: " Add the talent to Ai",

        },
        {
            id:3,
            title: " AI Artist",
            img: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: " Add the talent to Ai",

        },
        {
            id:4,
            title: " AI Artist",
            img: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: " Add the talent to Ai",

        },
        {
            id:5,
            title: " AI Artist",
            img: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: " Add the talent to Ai",

        }
    ]
  return (
    <div className='slide'>
        <div className="container">
        <Slider {...settings}>
           {data.map((item)=>(
             <Cards item={item} key={item.id}/>
           ))}
        </Slider>
        </div>
     
    </div>
  )
}

export default Slide
