import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/HomePage";
import Scoreboard from "./pages/ScoreboardPage";
import Teams from "./pages/TeamsPage";
import TeamDetail from "./pages/TeamDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Scoreboard />} />
           <Route path="/teams" element={<Teams />} />
           <Route path="/teams/:id" element={<TeamDetail />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
