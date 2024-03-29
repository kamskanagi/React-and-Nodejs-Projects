import React from 'react'
import "./orders.scss"
import { Link} from "react-router-dom";

const Orders = () => {

  const currentUser={
    id:1,
    username:"john Doe",
    isSeller: true
}
  return (
    <div className='orders'>
      <div className='container'>
            <div className='title'>
             <h1> Orders</h1>
             <Link to="/123"> <button>Add New Orders</button></Link>

            </div>
                <table>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>{currentUser?.isSeller ? "Buyer": "Seller"}</th>
                      <th>Contact</th>
                    </tr>
                    <tr>
                      <td>
                        <img className='img' src="" alt="" />
                      </td>
                      <td>Orders1</td>
                      <td>88 </td>
                      <td>123</td>
                      <td>
                        <img className='delete' src="./img/message.png" alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className='img' src="" alt="" />
                      </td>
                      <td>Orders1</td>
                      <td>88 </td>
                      <td>123</td>
                      <td>
                        <img className='delete' src="./img/message.png" alt="" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img className='img' src="" alt="" />
                      </td>
                      <td>Orders1</td>
                      <td>88 </td>
                      <td>123</td>
                      <td>
                        <img className='delete' src="./img/message.png" alt="" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img className='img' src="" alt="" />
                      </td>
                      <td>Orders1</td>
                      <td>88 </td>
                      <td>123</td>
                      <td>
                        <img className='delete' src="./img/message.png" alt="" />
                      </td>
                    </tr>
                    
                </table>
        </div>
    </div>
  )
}

export default Orders
