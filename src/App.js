import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Products";
const App = () => {
    return (
      <Router>
          <div>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/product" element={<Product />} />
          </Routes>
      </div>
      </Router>

    )
}

export default App;