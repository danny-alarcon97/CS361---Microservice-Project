import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import "./Style.css";
import "./Queries.css";

import Home from "./pages/Home";

import AddPet from "./pages/AddPet";
import PetsPage from "./pages/PetsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/pets" element={<PetsPage />} />

              <Route path="/create" element={<AddPet />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
