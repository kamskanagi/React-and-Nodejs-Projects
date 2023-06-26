import React from 'react'
import './gigCard.scss'
import { Link } from 'react-router-dom'


const GigCards = ({item}) => {

  return (
    <Link to='/gig/123' className="link">
        <div className="gigCard" >
            <img src={item.img} alt="" />
               <div className="info">
                  <div className="user">
                  <img src={item.pp} alt="" />
                      <h2>{item.title}</h2>
                      <span >{item.username}</span>
                  </div>
                  <p>{item.desc}</p>
                  <div className="star">
                    <img src="./img/star.png" alt="" />
                    <span>{item.star}</span>
                  </div>
               </div>
               <hr/>
               <div className="details">
                    <img src="./img/heart.png" alt="" />
                    <span>STARTING AT </span>
                    <h2>${item.price}</h2>
               </div>
        </div>
    </Link>
  )
}

export default GigCards
