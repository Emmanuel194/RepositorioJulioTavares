import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Premiacoes from "./pages/Premiacoes";
import Historia from "./pages/Historia";
import Poesias from "./pages/Poesias";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/poesias" element={<Poesias />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
