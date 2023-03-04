import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";

import CasinoPage from "./LearnPage/casino";
import GripPage from "./LearnPage/grip";
import MainPage from "./MainPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/casino" element={<CasinoPage />} />
      <Route path="/grip" element={<GripPage />} />
    </Routes>
  );
}

export default App;
