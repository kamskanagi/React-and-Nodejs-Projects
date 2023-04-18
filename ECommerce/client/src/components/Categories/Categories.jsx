import React from 'react'
import './categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'> 
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <button><Link to='/product/1' className="link" >Sales </Link></button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <button><Link to='/product/1' className="link" >Women </Link></button>
        </div>
      </div>

      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <button><Link to='/product/1' className="link" >Men </Link></button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
           <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <button><Link to='/product/1' className="link" >Children </Link></button>
                </div>
           </div>
           <div className="col">
           <div className="row">
                    <img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <button><Link to='/product/1' className="link" >Children </Link></button>
                </div>
           </div>
        </div>
        <div className="row">
        <div className="row"><img src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <button><Link to='/product/1' className="link" >Shoes </Link></button></div>
        </div>
      </div>
    </div>
  )
}

export default Categories
