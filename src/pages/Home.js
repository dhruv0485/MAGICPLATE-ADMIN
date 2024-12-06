import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { Home } from 'lucide-react';
import '../../src/css/home.css';

function HomePage() {
    return (
        <>
            <div id="Nav-Content-Bar">
                <nav id="Navbar">
                        <div id="header-company">
                            <header id="company">MAGICPLATE</header>
                        </div>
                        <div id="Login-button">
                            <Link to="/login" className="link-login"><button id="Login">Login</button></Link>
                            <Link to="/" className="link-home">
                            <button id="Home">
                                Home
                            </button>
                        </Link>
                        </div>
                </nav>
            </div>
            <div id="Main-Body-Content">
                <div id="Header-dashboard">
                        <div id="header-1">
                        <h1 id="Welcome-header-1">Welcome to Your Bakery</h1>
                        </div>
                        <div id="header-2">
                        <h1 id="Welcome-header-2">Dashboard</h1>
                        </div>
                </div>
                <div id="slogan-dashboard">
                    <p id="slogans">Manage your bakery with ease and efficiency</p>
                </div>
                <div id="dashboard-button">
                    <Link to="/login" style={{textDecoration: 'none'}}><button id="enter-dashboard">Enter Dashboard</button></Link>
                </div>
            </div> 
            <div id="cards">
                    <div className="card" id="Orders">
                        <div id="orders-headers">
                            <img src="/images/shopping-cart.png" id="cart"></img>
                            <p id="orders-management">Order Management</p>
                        </div>
                        <div id="orders-slogan">
                            <p id="orders-para">Track and manage all your bakery orders in real-time</p>
                        </div>
                    </div>
                    <div className="card" id="Sales">
                        <div id="sales-headers">
                            <img src="/images/business.png" id="graph"></img>
                            <p id="sales-management">Sales Analytics</p>
                        </div>
                        <div id="sales-slogan">
                            <p id="sales-para">Visualize your sales data with interactive charts</p>
                        </div>
                    </div>
                    <div className="card" id="Inventory">
                        <div id="inventory-headers">
                            <img src="/images/analytics.png" id="analytics"></img>
                            <p id="inventory-management">Inventory Tracking</p>
                        </div>
                        <div id="inventory-slogan">
                            <p id="inventory-para">Keep track of your ingredients and finished products</p>
                        </div>
                    </div>
                </div>
                <div id="Register">
                    <div id="register-slogan">
                        <h3 id="slogan-register">Ready to optimize your bakery operations?</h3>
                    </div>
                    <div id="button-register">
                    <button id="register-button">Get Started Now</button>
                    </div>
                </div>
                <div id="All-Rights">
                    <p id="All-Rights-Slogan">@2024 MagicPlate. All rights reserved.</p>
                </div>
        </>
    )
}

export default HomePage;