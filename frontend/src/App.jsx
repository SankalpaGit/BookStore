import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      {/* Routes with NavBar and Footer */}
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      }
      />
      <Route path="/about" element={
        <Layout>
          <About />
        </Layout>
      }
      />
      <Route path="/shop" element={
        <Layout>
          <Shop />
        </Layout>
      }
      />
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      }
      />

      <Route path="/cart" element={
        <Layout>
          <Cart />
        </Layout>
      }
      />

      <Route path="/profile" element={
        <Layout>
          < Profile />
        </Layout>
      }
      />

      {/* Routes without NavBar and Footer */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
