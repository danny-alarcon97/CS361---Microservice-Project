import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPet from "./pages/AddPet";
import EditPet from "./pages/EditPet";
import PetsPage from "./pages/PetsPage";
import RandomBackground from "./components/RandomBackground";
import "./App.css";
import "./Style.css";
import "./Queries.css";

function App() {
  return (
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
            <Route path="/edit/:id" element={<EditPet />} />
            <Route path="/random-background" element={<RandomBackground />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
