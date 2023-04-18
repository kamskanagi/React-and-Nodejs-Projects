import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    // const products = useSelector((state) => state.cart.products);
    // const dispatch = useDispatch();
    const data = [
        {
         id:1,
         img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
         img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
         title:"first images",
         desc:"first images",
         isNew:true,
         oldPrice: 19,
         price: 12,
        }
    ]

  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {data.map(item=>(
        <div className="item">
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0, 100)}</p>
                <div className="price">1 * {item.price}</div>
            </div>
            <DeleteOutlinedIcon  className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>total price</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
        
    </div>
  )
}

export default Cart
