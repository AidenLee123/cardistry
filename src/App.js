import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import AcanPage from "./LearnPage/acan";
import DetectorPage from "./LearnPage/detector";
import MamaPage from "./LearnPage/mama";
import DrunkPage from "./LearnPage/drunk";
import TopPage from "./LearnPage/top";
import AmbitiousPage from "./LearnPage/ambitious";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/acan" element={<AcanPage />} />
      <Route path="/detector" element={<DetectorPage />} />
      <Route path="/mama" element={<mamaPage />} />
      <Route path="/drunk" element={<DrunkPage />} />
      <Route path="/top" element={<TopPage />} />
      <Route path="/ambitious" element={<AmbitiousPage />} />
     

    </Routes>
  );
}

export default App;
