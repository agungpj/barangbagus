import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Home from "./pages/Home";
import Productid from "./pages/Productid";
import Category from "./pages/Category";
import Product from "./pages/Product";
import EditCategory from "./pages/EditCategory";
import EditProduct from "./pages/EditProduct";
import Profile from "./pages/Profile";
import Complain from "./pages/Complain";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productid" element={<Productid />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/edit-category" element={<EditCategory />} />
          <Route exact path="/edit-product" element={<EditProduct />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/add-category" element={<AddCategory />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/complain" element={<Complain />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
