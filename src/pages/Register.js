import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User } from 'lucide-react';
import { FaIdCard } from "react-icons/fa";
import '../../src/css/register.css';

async function SubmitRegisterForm(RegisterData) {
    try{
        const API_URL = process.env.REACT_APP_API_URL || 'https://magicplate-admin.vercel.app'
        const response = await fetch(`${API_URL}/signup`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(RegisterData),
        })
        if(response.ok){
            const data = await response.json()
            return {success:true,message:data.message}
        } else {
            const error = await response.json()
            return {success:false,message:error.message || "Registration Failed"}
        }
    } catch(error) {
        return {success:false,message:error.message}
    }
}

function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const handleRegister = async (event) => {
        event.preventDefault()
        const RegisterData = {
            name:name,
            email:email,
            username:username,
            password:password
        }
        const result = await SubmitRegisterForm(RegisterData)
        if(result.success){
            alert("Registeration completed")
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
                        <Link className="link-login" to="/login"><button id="Login" >Login</button></Link>
                        <Link to="/" className="link-home">
                            <button id="Home">
                                Home
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
            <div id="Register-Body">
                <form id="Register-Form" onSubmit={handleRegister}>
                    <div id="form-header">
                        <header id="header-register">Admin Dashboard Signup</header>
                    </div>
                    <div id="name-box">
                        <label id="name-login">Name</label>
                        <div id="input-box-name" style={{ display: 'flex', alignItems: 'center' }}>
                            <FaIdCard
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color: 'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Enter Your Name" />
                        </div>
                    </div>
                    <div id="email-box">
                        <label id="email-login">Email</label>
                        <div id="input-box-email" style={{ display: 'flex', alignItems: 'center' }}>
                            <Mail
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color: 'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter Your Email" />
                        </div>
                    </div>
                    <div id="username-box">
                        <label id="username-login">Username</label>
                        <div id="input-box-username" style={{ display: 'flex', alignItems: 'center' }}>
                            <User
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color: 'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" Enter Your Username" />
                        </div>
                    </div>
                    <div id="password-box">
                        <label id="password-login">Password</label>
                        <div id="input-box-password" style={{ display: 'flex', alignItems: 'center' }}>
                            <Lock
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    marginRight: '10px',
                                    color: 'rgba(0,0,0,0.55)'
                                }}
                            />
                            <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter Your Password"></input>
                        </div>
                    </div>
                    <div id="registers-button">
                            <button id="registers" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;