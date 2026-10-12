import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import TeachersPage from "../TeachersPage/TeachersPage";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>
    </>
  );
}

export default App;
