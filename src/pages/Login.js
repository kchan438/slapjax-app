import React from 'react';
// import './pagestyle.css';

const Login = () => {
    return (
        <div className="page">
            <div className="wrap">
                <h1>Login</h1>
                <br></br>
                    <div className="form-group">
                        <label><strong>Email:</strong> </label>
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Password:</strong> </label>
                        <input 
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            
                        />
                    </div>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                        
                    >
                        Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;



{/* <Table>
    <tr>
        <th><p>Login: </p></th>
        <th><input /></th>
    </tr>
    <tr>
        <th><p>Password: </p></th>
        <th><input /></th>
    </tr>
</Table> */}