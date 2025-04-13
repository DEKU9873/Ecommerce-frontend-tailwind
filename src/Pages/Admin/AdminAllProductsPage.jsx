import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminProductCard from '../../components/Products/AdminProductCard'

const AdminAllProductsPage = () => {
  return (
    <div dir='rtl' className='grid grid-cols-5'>
      <AdminSidebar className='col-span-1'/>
      <div className='col-span-4 bg-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6' >
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      <AdminProductCard />   
      
      </div> 
      </div>
    </div>
  )
}

export default AdminAllProductsPage