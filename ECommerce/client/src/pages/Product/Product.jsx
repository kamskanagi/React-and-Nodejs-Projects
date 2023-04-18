import React, { useState } from 'react'
import './product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { setRef } from '@mui/material';

const Product = () => {

    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const images = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
       
      ];
  return (
    <div className='product'>
        <div className="left">
           <div className="images">
                <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)}/>
                <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)} />
           </div>
           <div className="mainImg">
                <img src={images[selectedImage]} alt="" />
            </div>
        </div>

        <div className="right">

           <h1>Title</h1>
           <span className='price'>$18</span>
           <p> wkjfbwkjbfkhwbfkhwfw</p>
           <div className="quantity">
            <button onClick={()=>setQuantity((prev)=> prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity((next)=> next + 1)}>+</button>
           </div>

           <div className="add">
            <button> < AddShoppingCartIcon /> Add to Cart</button>
           </div>
           <div className="links">
                <div className="item"> < FavoriteBorderIcon/> add to watchlist</div>
                <div className="item">< BalanceIcon/> add to compare</div>
           </div>
           <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
        </div>
      
    </div>
  )
}

export default Product
