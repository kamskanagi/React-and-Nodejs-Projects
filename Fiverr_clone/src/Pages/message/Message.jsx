import React from 'react'
import './message.scss'
import { Link} from "react-router-dom";

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <div className="breadcrumbs">
          <span><Link to='/messages'> MESSAGES</Link> John</span>
            <div className="messages">
              <div className="item">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>

              <div className="item owner">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>

              <div className="item">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>

              <div className="item owner">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>

              <div className="item">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>

              <div className="item owner">
                <img src="https://images.pexels.com/photos/15302393/pexels-photo-15302393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Sit perferendis magni officiis suscipit sed 
                  veritatis incidunt iure ipsa aut optio, debitis illum,
                   itaque voluptatum exercitationem cupiditate enim. 
                   Quibusdam, dicta molestias!

                </p>

              </div>
            </div>
            <hr/>
            <div className="write">
                <textarea type="textarea" placeholder='write a meesage' name="" id="" cols='30' rows='10'></textarea>
                <button>Send</button>
            </div>
        </div>
      </div>
      message
    </div>
  )
}

export default Message
