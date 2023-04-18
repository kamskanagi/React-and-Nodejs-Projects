import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts type="Feature "/>
      <Categories />
      <FeatureProducts type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home
