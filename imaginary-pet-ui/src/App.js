import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import "./Style.css";
import "./Queries.css";

import Home from "./pages/Home";

// import PetInformation from "./components/PetInformation";
// import RandomStatsGenerator from "./components/RandomStatsGenerator";
// import PetGrowthManager from "./components/PetGrowthManager";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
