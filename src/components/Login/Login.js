import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [id, setId] = useState(''); // Changed state variable name to 'id'
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const handleSubmit = async(event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:4000/user-app/login', { id, password }); // Changed 'email' to 'id'
        console.log(res);
        console.log('Login Details:', { id, password }); // Changed 'email' to 'id' here
        if(res.data.message === "login success"){
          navigate('/');
        }
        else{
          console.log(res.data.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Admin  Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ADMIN ID:</label> {/* Changed 'for' attribute to 'id' */}
                    <input 
                        type="text" 
                        id="id"  // Changed 'email' to 'id'
                        value={id}  // Changed 'email' to 'id'
                        onChange={(e) => setId(e.target.value)}  // Changed 'email' to 'id'
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">PASSWORD:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
