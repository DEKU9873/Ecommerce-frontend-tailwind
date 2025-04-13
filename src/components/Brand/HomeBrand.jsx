import React from 'react'
import Header from '../Uitily/Header'
import AllDetailsButton from '../Uitily/AllDetailsButton'
import BrandCard from './BrandCard'

const HomeBrand = () => {
  return (
    <div className='bg-gray-100 py-8 px-4'>
      <Header title='الماركات' subtitle='الماركات الرئيسية' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-8'>
       <BrandCard/>
       <BrandCard/>
       <BrandCard/>
       <BrandCard/>
       <BrandCard/>
       <BrandCard/>
      </div>
      <div className="flex justify-center">
        <AllDetailsButton title='عرض كل الماركات' />
      </div>
    </div>
  )
}

export default HomeBrand
