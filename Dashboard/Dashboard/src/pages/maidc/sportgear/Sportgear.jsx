import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import "./sportgear.scss"

const Sportgear = () => {
  return (
    <div className='sportgear'>
    <Sidebar /> 
    
  <div className="sportgearContainer"> 
     <Navbar />
          <div className="sportgearframe"> 
          <iframe
          title="Sport"
          src="https://118.99.175.234/sportgear/"
          width="100%"
          height="600"
          frameborder="0"
          />
     </div>
   </div>
</div>
  )
}

export default Sportgear
