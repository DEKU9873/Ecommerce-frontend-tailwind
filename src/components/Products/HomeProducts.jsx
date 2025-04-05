import React from 'react'
import ProductCard from './ProductCard'
import Header from '../Uitily/Header'

const HomeProducts = () => {
  return (
    <div className=' bg-gray-200 p-6 '>
      <Header/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-[80px] p-6' >
      <ProductCard />   
      <ProductCard />   
      <ProductCard />  
      <ProductCard />  
      </div> 
    </div>
  )
}

export default HomeProducts
