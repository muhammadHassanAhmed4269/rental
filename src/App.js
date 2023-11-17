import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login/index";
import Navbar from "./Components/Navbar/index";
import NewListing from "./Pages/NewListing/Index";
import HomePage from "./Pages/HomePage/Index";
import CategoriesPage from "./Pages/CategoriesPage/Index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Listing" element={<NewListing />} />
          <Route path="/Categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
