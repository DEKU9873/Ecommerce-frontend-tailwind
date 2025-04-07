import React from 'react'
import AdminSidebar from '../components/Admin/AdminSidebar'

const AdminPage = () => {
  return (
    <div dir='rtl' className='grid grid-cols-5'>
      <AdminSidebar className='col-span-1'/>
      <div className='col-span-4 '>
        hello
      </div>
    </div>
  )
}

export default AdminPage