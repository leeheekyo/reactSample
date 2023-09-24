import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Sample from "./pages/sample/Sample";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/sample" element={<Sample />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
