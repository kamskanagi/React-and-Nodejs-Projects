import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                    <h1> Fon the perfect <span>freelances</span> for your projects</h1>
                <div className="search">
                    <div className="searchIput">
                        <img src="img/search.png" alt="" />
                        <input type="text"  placeholder='try building somthing'/>
                    </div>
                    <button>Search</button>
                </div>

                <div className="popular">
                    <span>Popular</span>
                    <button>Wed Desing</button>
                    <button>Wordpress</button>
                    <button>Logo design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">  
                <img src="/img/man.png" alt="" />
            </div>
      </div>
    </div>
  )
}

export default Featured
