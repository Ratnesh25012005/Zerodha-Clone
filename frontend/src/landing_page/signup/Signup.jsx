import React, { useState } from "react";

import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate=useNavigate();
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-4">
          {isSignup ? "Create Account" : "Sign In"}
        </h3>

        <form>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button onClick={()=>{
            navigate("/");
          }} type="submit" className="btn btn-primary w-100">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-3">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignup(!isSignup)}
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "500" }}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;