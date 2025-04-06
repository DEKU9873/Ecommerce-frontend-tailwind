import React from 'react'

const AllDetailsButton = ({title}) => {
  return (
    <div className='flex justify-center'>
        <button className='bg-orange-300 text-white font-semibold py-3 px-4  shadow-md hover:bg-amber-600 transition-all duration-200 rounded-2xl'>{title}</button>
    </div>
  )
}

export default AllDetailsButton
