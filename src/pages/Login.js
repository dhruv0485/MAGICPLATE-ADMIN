import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Lock, User } from 'lucide-react';
import '../../src/css/login.css';

async function SubmitLogIn(LogInData) {
    try {
        const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app'
        const response = await fetch(`${API_URL}/admin-login`,{
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify(LogInData),
        })
        if(response.ok){
            const data = await response.json()
            return {success:true,message:data.message}
        } else {
            const error = await response.json()
            return {success:false,message:error.message || "Login failed"}
        }
    } catch(error) {
        return {success:false, message:error.message}
    }
}

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        const LogInData = {
            username:username,
            password:password
        }
        const result = await SubmitLogIn(LogInData)
        if(result.success){
            alert("Login Successful")
            navigate("/product")
        } else {
            setError(result.message)
        }
    }

    return (
        <>
            <div id="Nav-Content-Bar">
                <nav id="Navbar">
                    <div id="header-company">
                        <header id="company">MAGICPLATE</header>
                    </div>
                    <div id="Login-button">
                        <Link className="link-register" to="/signup"><button id="Login" >Sign Up</button></Link>
                        <Link to="/" className="link-home">
                            <button id="Home">
                                Home
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
            <div id="Login-Body">
                <form id="Login-Form" onSubmit={handleLogin}>
                    <div id="form-header-1">
                        <header id="header-login">Admin Dashboard Login</header>
                    </div>
                    <div id="username-box-1">
                        <label id="username-login">Username</label>
                        <div id="input-box-username" style={{ display: 'flex', alignItems: 'center' }}>
                            <User
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color:'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" Enter Your Username" />
                        </div>
                    </div>
                    <div id="password-box-1">
                        <label id="password-login">Password</label>
                        <div id="input-box-password" style={{display:'flex',alignItems:'center'}}>
                            <Lock
                                style={{
                                    height:'25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color:'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter Your Password"></input>
                        </div>
                    </div>
                    <div id="logins-button">
                            <button id="logins" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;