import React from 'react'
import './feature.scss'
import Cards from '../Cards/Cards'
const FeatureProducts = ({type}) => {

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  const data = [
   {
    id:1,
    img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"first images",
    isNew:true,
    oldPrice: 19,
    price: 12,
   },
   {
    id:2,
    img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"second images",
    oldPrice: 19, 
    isNew:true,
    price: 12,
   },
   {
    id:3,
    img:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"third images",
    isNew:false,
    oldPrice: 19,
    price:12,
   },

  ];



  return (
    <div className='featureproducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
        </p>
      </div>

      <div className="bottom">
          {data.map(item =>(
            <Cards item={item} key={item.id}/>
          ))}
      </div>

    </div>
  )
}

export default FeatureProducts
