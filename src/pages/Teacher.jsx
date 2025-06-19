import React from "react";
import { Routes, Route } from "react-router-dom";
import TeacherNavbar from "../components/Navbars/TeacherNavbar";
import StudentsList from "../components/teacher/StudentsList";

const Teacher = () => {
  return (
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
