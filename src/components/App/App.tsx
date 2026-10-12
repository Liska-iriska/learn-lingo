import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import TeachersPage from "../TeachersPage/TeachersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>
    </>
  );
}

export default App;
