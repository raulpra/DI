import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Scoreboard from "./pages/ScoreboardPage";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Scoreboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
