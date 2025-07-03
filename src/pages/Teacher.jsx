import React from "react";
import { Routes, Route } from "react-router-dom";
import TeacherNavbar from "../components/Navbars/TeacherNavbar";
import StudentsList from "../components/teacher/StudentsList";
import useGetUserInfo from "../hooks/auth/useGetUserInfo";

const Teacher = () => {
  const {loading} = useGetUserInfo()
  return loading ? <p>Loading...</p> :(
    <div>
      <TeacherNavbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<h2>Welcome to the Teacher's Dashboard!</h2>} />
          <Route path="students" element={<StudentsList />} />
          {/* You can add more nested routes like "class", "community", etc. */}
        </Routes>
      </div>
    </div>
  );
};

export default Teacher;
