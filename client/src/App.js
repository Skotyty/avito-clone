import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} /> 
        <Route path="/list" element={<Home />} /> 
        <Route path="/form" element={<FormPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
