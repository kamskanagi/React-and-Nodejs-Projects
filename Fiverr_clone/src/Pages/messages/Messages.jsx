import React from 'react'
import { Link} from "react-router-dom";
import "./messages.scss"
const Messages = () => {

  const currentUser={
    id:1,
    username:"john Doe",
    isSeller: true
}


const message =" Hello this is for testing the message"

return (
    <div className='messages'>
     <div className='container'>
            <div className='title'>
             <h1> Messages</h1>

            </div>
                <table>
                    <tr>
                      <th>{currentUser?.isSeller ? "Buyer": "Seller"}</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                    <tr className='active'>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                      <td>
                        <button>Mark as read</button>
                      </td>
                    </tr>
                    <tr className='active'>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                      <td>
                        <button>Mark as read</button>
                      </td>
                    </tr>
                    <tr>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                      {/* <td>
                        <button>Mark as read</button>
                      </td> */}
                    </tr>
                    <tr>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                     
                    </tr>
                    <tr>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                     
                    </tr>
                    <tr>
                      <td>John Deo</td>
                      <td><Link className='link' to='/message/123'>{message.substring(1,50)}... </Link></td>
                      <td>i day ago</td>
                      
                    </tr>
                    
                </table>
        </div>
    </div>
  )
}

export default Messages
