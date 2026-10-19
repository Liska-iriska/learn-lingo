import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import TeachersPage from "../TeachersPage/TeachersPage";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
