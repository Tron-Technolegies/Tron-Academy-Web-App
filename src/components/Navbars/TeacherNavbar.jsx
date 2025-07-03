import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbars/TeacherNavbar.css";
import academylogo from "../../../public/logos/academy-logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { UserContext } from "../../UserContext";

const TeacherNavbar = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)

  

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
        {user?.role === "student" &&  <ul>
          <li><Link to="/">Dashboard</Link></li>    
        </ul>}
        {user?.role === "teacher" && <ul>
          
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/class">Class</Link></li>
          <li><Link to="#">Community</Link></li>
        </ul>}
        
      </div>

      <div className="teacher-nav-right">
        <div className="nav-notification-icon">
          <IoIosNotificationsOutline />
        </div>
        <div className="teacher-nav-user">
          <div className="user-info">
            <span className="user-name">{user?.username}</span>
            <span className="user-email">{user?.email}</span>
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
