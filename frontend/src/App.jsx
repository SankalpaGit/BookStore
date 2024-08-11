// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="bg-black h-16">
        <p className="text-5xl font-bold text-gray-300 text-center">
          <span className="text-green-500">Django</span> x <span className="text-blue-400">React</span>
        </p>
      </div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
