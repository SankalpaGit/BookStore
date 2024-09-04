// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
