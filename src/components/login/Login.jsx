import React, { useState } from "react";
import "../login/Login.css";
import academylogo from "../../../public/logos/academy-logo.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const users = [
    {
      email: "aswinbinaj@gmail.com",
      password: "aswin123",
      role: "teacher",
    },
    {
      email: "yedhu@gmail.com",
      password: "yedhu123",
      role: "student",
    },
  ];

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.email === formdata.email.trim() &&
        u.password === formdata.password.trim()
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "teacher") {
        console.log("Teacher logged in");
        navigate("/teacher");
      } else if (user.role === "student") {
        navigate("/student");
        console.log("Student logged in");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-logo">
        <img src={academylogo} alt="Academy Logo" />
      </div>

      <div className="login-page-form">
        <div className="login-form-heading">
          <h1>
            Welcome, <br />
            Log into your account
          </h1>
        </div>

        <div className="login-fields">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formdata.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={formdata.password}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
          <MdOutlineArrowRight className="login-button-icon" size={35} />
        </button>
      </div>
    </div>
  );
};

export default Login;
