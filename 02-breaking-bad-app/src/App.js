import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail"

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
