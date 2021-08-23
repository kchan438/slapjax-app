import React from 'react';
// import './pagestyle.css';

const Register = () => {
    return (
      <div className="page">
        <div className="wrap">
          <h1>User Registration</h1>
          <br></br>
            <div className="form-group">
              <label><strong>Name:</strong></label>
              <input
                type="text"
                id="reg-name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label><strong>Email:</strong></label>
              <input
                type="email"
                id="reg-email"
                className="form-control"
                placeholder="Enter email"  
              />
            </div>
            <div className="form-group">
              <label><strong>Confirm Email:</strong></label>
              <input
                type="email"
                id="reg-confirm-email"
                className="form-control"
                placeholder="Enter email"  
              />
            </div>
            <div className="form-group">
              <label><strong>Password:</strong></label>
              <input
                type="password"
                id="reg-password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label><strong>Confirm Password:</strong></label>
              <input
                type="password"
                id="reg-confirm-password"
                className="form-control"
                placeholder="Confirm Password"  
              />
            </div>
            <br></br>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        </div>
      </div>
    );
};

export default Register;