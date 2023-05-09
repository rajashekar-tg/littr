import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Pricing from "./pages/Pricing.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Login from "./pages/Login";

const App = () => {
  const state = localStorage.getItem("state");
  console.log(state);
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Pricing />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
