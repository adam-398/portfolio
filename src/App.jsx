import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HikingAdventures from "./pages/HikingAdventures.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hiking" element={<HikingAdventures />} />
    </Routes>
  );
}
