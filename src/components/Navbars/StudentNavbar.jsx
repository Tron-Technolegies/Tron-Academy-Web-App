import React from "react";
import "./StudentNavbar.css";
import academylogo from "../../../public/logos/academy-logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const StudentNavbar = () => {
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
    <div className="student-navbar">
      <div className="student-nav-logo">
        <img src={academylogo} alt="academy-logo" />
      </div>

      <div className="student-nav-links">
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>

      <div className="student-nav-right">
        <div className="nav-notification-icon">
          <IoIosNotificationsOutline />
        </div>

        <div className="student-nav-user">
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

export default StudentNavbar;