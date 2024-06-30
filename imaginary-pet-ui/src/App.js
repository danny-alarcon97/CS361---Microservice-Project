import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import { BackgroundProvider } from "./components/BackgroundContext";
// import MusicPlayer from "./components/MusicPlayer";

// Pages
import Home from "./pages/Home";
import AddPet from "./pages/AddPet";
import EditPet from "./pages/EditPet";
import PetsPage from "./pages/PetsPage";
import RandomBackground from "./pages/RandomBackground";

// CSS
import "./css/App.css";
import "./css/Style.css";
import "./css/Queries.css";

function App() {
  return (
    <BackgroundProvider>
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

        {/* <MusicPlayer /> */}
      </BrowserRouter>
    </BackgroundProvider>
  );
}

export default App;
