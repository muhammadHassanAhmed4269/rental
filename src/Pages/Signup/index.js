import React, { useState } from "react";
import AuthLayout from "../../Components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/authStyles.css";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  //states
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Form submit Handle
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <AuthLayout>
      <form onSubmit={submitHandler}>
        <div className="frame17" style={{ height: "24px" }}>
          Create an account
        </div>

        <div className="frame18">
          Already have an Account ?{" "}
          <Link
            to={"/login"}
            style={{ paddingLeft: "5px", color: "blueviolet" }}
          >
            Log in
          </Link>
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
            <AiOutlineUser />
            <input
              type="text"
              id="vector1"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
        </div>

        <div className="button-container">
          <div style={{ display: "flex" }}>
            <button type="submit">Signup</button>
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

export default Signup;
