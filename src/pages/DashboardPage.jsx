import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import TeacherDashboard from '../components/TeacherDashboard'
import StudentDashboard from '../components/StudentDashboard'

export default function DashboardPage() {
    const {user} = useContext(UserContext)
  return (
    <div>
      {user?.role === "teacher" ? <TeacherDashboard /> : <StudentDashboard />}
    </div>
  )
}
