import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save data to local storage
    const userData = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Sign-up successful!");
  };

  return (
    <div className="app">
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="left">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignUp} className="form">
             

              <input
                type="text"
                id="fullName"
                value={fullName}
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              

              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

             

              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password "
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              

              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <p className="login-caption">
                Already have an Account? <a href="#">Login</a>
              </p>
              <div className="social-media-icons">
              <img width="38" height="38" className="social-icons" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
              <img width="38" height="38" className="social-icons" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
              <img width="38" height="38" className="social-icons" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
              </div>

            
              <button type="submit" className="button">
                Sign Up
              </button>
            </form>
          </div>

          <div className="right">
            <img
              className="vector-img"
              alt="img"
              src={require("./assets/img.jpg")}
            ></img>
            <div className="rightside-text">
              <h1>Welcome,</h1>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
