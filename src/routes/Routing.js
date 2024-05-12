import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Dashboard from '../common/Dashboard'
import CreateComissionAdmin from '../components/admin/commission/CreateComissionAdmin'
import SideDrawer from '../components/Layout/SideDrawer'
import UserList from '../common/UserList'

const Routing = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Dashboard />
  //   },
  //   {
  //     path: "/createComission",
  //     element: <CreateComissionAdmin />
  //   }
  // ])
  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <Routes>
    <Route path="/" element={<Dashboard />} />
      <Route index element={<Dashboard />} />
      <Route path="/commissionPay" element={<CreateComissionAdmin />} />
      <Route path="/surchargePay" element={<CreateComissionAdmin />} />
      <Route path="/userList" element={<UserList />} />

  </Routes>
  </>
  )
}

export default Routing