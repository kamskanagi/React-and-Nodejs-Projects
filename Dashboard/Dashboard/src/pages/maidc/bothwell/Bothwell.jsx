import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import "./bothwell.scss"

const Bothwell = () => {
  return (
        <div className='bothwell'>
        <Sidebar />
        
      <div className="bothwellContainer"> 
         <Navbar />
              <div className="bothwellframe"> 
              <iframe
              title="Sport"
              src="http://172.16.188.130:40002/"
              width="100%"
              height="600"
              frameborder="0"
              />
         </div>
       </div>
    </div>
  )
}

export default Bothwell
