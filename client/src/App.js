import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
