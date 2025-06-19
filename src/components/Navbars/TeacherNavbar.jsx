import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbars/TeacherNavbar.css";
import academylogo from "../../../public/logos/academy-logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const TeacherNavbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userEmail = user.email || "user@example.com";
  const userName = user.email
    ? `Hello ${
        user.email.split("@")[0].charAt(0).toUpperCase() +
        user.email.split("@")[0].slice(1)
      }`
    : "Hello Guest";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="teacher-navbar">
      <div className="teacher-nav-logo">
        <img src={academylogo} alt="academy-logo" />
      </div>

      <div className="teacher-nav-links">
        <ul>
          <li><Link to="/teacher">Dashboard</Link></li>
          <li><Link to="/teacher/students">Students</Link></li>
          <li><Link to="#">Class</Link></li>
          <li><Link to="#">Community</Link></li>
        </ul>
      </div>

      <div className="teacher-nav-right">
        <div className="nav-notification-icon">
          <IoIosNotificationsOutline />
        </div>
        <div className="teacher-nav-user">
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-email">{userEmail}</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherNavbar;
