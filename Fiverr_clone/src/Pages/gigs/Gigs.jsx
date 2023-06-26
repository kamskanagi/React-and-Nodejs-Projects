import React, { useState, useRef } from 'react'
import {gigsData} from '../../components/Data'
import GigCards from '../../components/gigCards/GigCards';
import './gigs.scss'

const Gigs = () => {
  const [sort,setSort]= useState("sales")
  const [open,setOpen]= useState(false)

  const minRef = useRef();
  const maxRef = useRef();

  const reSort =(type)=>{
    setSort(type)
    setOpen(false)
  }

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
          <span className='breadcrumbs'> FIEVRR - GRAPHI & DESING</span>
          <h1>AI Artist </h1>
          <p> Explore the boundaries of the art and technology with Fiverrs AI artist.

          </p>
          <div className="menu">
            <div className="left">
                <span>Budget</span>
                <input type="text" placeholder='min'/>
                <input type="text" placeholder='max'/>
                <button>Apply</button>
            </div>
            <div className="right">
                <span className='sortBy'>SortBy</span>
                <span className='sortType'>{sort === "sales" ? "Best Selling " : "Newest"}</span>
                <img src="./img/down.png" alt=""  onClick={()=>setOpen(!open)}/>

                {open && <div className="rightMenu">

                {sort === "sales"? (<span onClick={()=>reSort("createdAt")} >Newest</span>):( 
                <span className='sortType'  onClick={()=>reSort("sales") }>Best Selling</span>)
                }
                </div>}

          </div>
      </div>
       <div className="cards">
              {gigsData.map((gig)=>(
                <GigCards key={gig.id} item={gig}/>
              ))}
                
            </div>
    </div>
  </div>
  )
}

export default Gigs
