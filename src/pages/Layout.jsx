import React from 'react'
import TeacherNavbar from '../components/Navbars/TeacherNavbar'
import { Outlet } from 'react-router-dom'
import useGetUserInfo from '../hooks/auth/useGetUserInfo'

export default function Layout() {
    const {loading} = useGetUserInfo()
  return loading ? <p>Loading...</p> :(
    <div>
      <TeacherNavbar />
      <Outlet />
    </div>
  )
}
