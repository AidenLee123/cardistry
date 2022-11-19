import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
