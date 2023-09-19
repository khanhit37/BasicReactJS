import logo from "./logo.svg";

import "./App.scss";
import React, { useContext, useState } from "react";
import Todo from "./views/Todo";
import Nav from "./views/Nav";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";
import Lightbox from "react-image-lightbox";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import About from "./components/Products/About";
import Weather from "./components/Weather";
import GenerateOtp from "./components/Otp/GenerateOtp";
import Otp from "./components/Otp/Otp";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />}></Route>

          <Route path="/product" element={<Product />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
        {/* <Home />

        <AddNewProduct /> */}
        <hr></hr>
      </div>
    </Router>
  );
}

export default App;
