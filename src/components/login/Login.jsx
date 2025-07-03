import React, { useState } from "react";
import "../login/Login.css";
import academylogo from "../../../public/logos/academy-logo.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
const {loading, login} = useLogin()

  return (
    <div className="login-page-container">
      <div className="login-page-logo">
        <img src={academylogo} alt="Academy Logo" />
      </div>

      <div className="login-page-form">
        <div className="login-form-heading">
          <h1>
            Welcome,
            <br />
            Log into your account
          </h1>
        </div>

        <div className="login-fields">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button className="login-button" onClick={()=> login({email: form.email, password:form.password})}>
          Login
          <MdOutlineArrowRight className="login-button-icon" size={35} />
        </button>
        {loading && <p>Loading....</p>}
      </div>
    </div>
  );
};

export default Login;
