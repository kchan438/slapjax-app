import React from 'react';
import './pagestyle.css';

const Register = () => {
    return (
        <div className="page">
                  <div className="wrap">
        <h1>
          User Registration
                </h1>
        <br></br>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              id="name-input"
              placeholder="Name"
              
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              id="email-input"
              placeholder="Enter email"
              
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              id="password-input"
              placeholder="Confirm Password"
              
            />
          </div>
          <br></br>
          <button  type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        </form>
      </div>
        </div>
    );
};

export default Register;