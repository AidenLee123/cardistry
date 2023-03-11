import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";

import CasinoPage from "./LearnPage/casino";
import GripPage from "./LearnPage/grip";
import MainPage from "./MainPage";

import { Routes, Route } from "react-router-dom";
import RibbonPage from "./LearnPage/ribbon";

function App() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/casino" element={<CasinoPage />} />
      <Route path="/grip" element={<GripPage />} />
      <Route path="/ribbon" element={<RibbonPage />} />
    </Routes>
  );
}

export default App;
