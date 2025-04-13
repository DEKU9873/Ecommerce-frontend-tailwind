import React from 'react'
import Header from '../Uitily/Header'
import AllDetailsButton from '../Uitily/AllDetailsButton'
import CategoryCard from './CategoryCard'

const HomeCategories = () => {
  return (
    <div className='bg-gray-100 py-8 px-4'>
      <Header title='التصنيفات' subtitle='التصنيفات الرئيسية' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-8'>
        <CategoryCard title="تصنيف 1" />
        <CategoryCard title="تصنيف 2" />
        <CategoryCard title="تصنيف 3" />
        <CategoryCard title="تصنيف 4" />
        <CategoryCard title="تصنيف 5" />
        <CategoryCard title="تصنيف 5" />
      </div>
      <div className="flex justify-center">
        <AllDetailsButton title='عرض كل التصنيفات' />
      </div>
    </div>
  )
}

export default HomeCategories
