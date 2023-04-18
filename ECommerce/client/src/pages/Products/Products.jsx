import React, { useState } from 'react'
import './products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {

const catId = parseInt(useParams().id)
 const [ Maxprice, setMaxprice] = useState(100)
 const [ Sort, setSort] = useState()


  return (
    <div className='products'>
        <div className="left">
            <div className="filterItem">
                <h2>product catgeories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Bags</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Tshirt</label>
                    </div>
            </div>
            <div className="filterItem">
                <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range"  min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)}/>
                        <span>{Maxprice}</span>
                    </div>
            </div>
            <div className="filterItem">
                <h2>Sort By</h2>
                <   div className="inputItem">
                        <input type="radio" id='asc' value='asc' name="price" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>

                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name="price" onChange={(e)=>setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
            </div>
        </div>
        <div className="right">
            <img className='catImg' src="https://images.pexels.com/photos/6957717/pexels-photo-6957717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <List catId={catId} Maxprice={Maxprice} Sort={Sort}/>
        </div>
      
    </div>
  )
}

export default Products
