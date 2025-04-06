import React from 'react'
import ProductCard from './ProductCard'
import Header from '../Uitily/Header'
import AllDetailsButton from '../Uitily/AllDetailsButton'

const HomeProducts = () => {
  return (
    <div className=' bg-gray-100 p-6 '>
      <Header title='المنتجات' subtitle='المنتجات الرئيسية' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6' >
      <ProductCard />   
      <ProductCard />   
      <ProductCard />  
      <ProductCard />  
      <ProductCard />  
      </div> 
      <AllDetailsButton title='عرض كل المنتجات'/>
    </div>
  )
}

export default HomeProducts
