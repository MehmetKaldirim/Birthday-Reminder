import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

import Card from "./Card";
import "./index.css";
import UpcomingBirthday from "./UpcomingBirthday";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <h1 style={{ color: "lightpink" }}>Today's Birthday</h1>
        <Card />
        <h1 style={{ color: "lightgreen" }}>Upcoming Birthday</h1>
        <UpcomingBirthday />
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
