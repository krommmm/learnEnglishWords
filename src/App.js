import "./assets/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/reusables/Header";
import Home from "./components/pages/Home";
import Suivi from "./components/pages/Suivi";
import Nav from "./components/reusables/Nav";
import Options from "./components/pages/Options";
import Times from "./components/pages/Times";
import Words from "./components/pages/Words";
import Verbes from "./components/pages/Verbe";
import Profil from "./components/pages/Profil";


function App() {
  return (
    <Router> {/* Ajoute BrowserRouter ici */}
      <Header />
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/words" element={<Words />} />
          <Route path="/suivi" element={<Suivi />} />
          <Route path="/options" element={<Options />} />
          <Route path="/words" element={<Words />} />
          <Route path="/times" element={<Times />} />
          <Route path="/verbes" element={<Verbes />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
