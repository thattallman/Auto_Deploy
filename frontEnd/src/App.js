import "./App.css";
import UserAuth from "./components/UserAuth.js";
import Login from "./components/Login.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>

      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/login" element={<Login  setUser={setUser}/>} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
