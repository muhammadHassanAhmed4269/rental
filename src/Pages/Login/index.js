import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../../Components/layouts/AuthLayout";
import "../../styles/authStyles.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout>
      <form onSubmit={submitHandler}>
        <div className="frame17">
          <h1>Welcome</h1>
        </div>

        <div className="frame18">
          <h3>
            Login or
            <Link
              to={"/Signup"}
              style={{ paddingLeft: "5px", color: "blueviolet" }}
            >
              create account
            </Link>
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "200px",
            left: "0",
          }}
        >
          <div className="input-container">
            <AiOutlineMail />
            <input
              type="text"
              id="vector2"
              placeholder="Email Address or Phone Number"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <CiLock />
            <input
              type={passwordVisible ? "text" : "password"}
              id="vector3"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordVisible ? (
              <AiOutlineEye onClick={togglePasswordVisibility} />
            ) : (
              <AiOutlineEyeInvisible onClick={togglePasswordVisibility} />
            )}
          </div>

          <div>
            <Link to={"#"}>Forgot Password?</Link>
          </div>
        </div>

        <div className="button-container">
          <div style={{ display: "flex" }}>
            <button type="submit">Login</button>
          </div>

          <div style={{ marginLeft: "180px" }}>
            <span>Or</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "112px",
            }}
          >
            <Link to={"#"}>
              <IoLogoFacebook color="#4267B2" />
            </Link>
            <Link to={"#"}>
              <FcGoogle />
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
