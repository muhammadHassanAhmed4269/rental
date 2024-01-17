import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login/index";
import NewListing from "./Pages/NewListing/Index";
import HomePage from "./Pages/HomePage/Index";
import CategoriesPage from "./Pages/CategoriesPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import WishlistPage from "./Pages/WishlistPage/Index";
import ExplorePage from "./Pages/ExplorePage/Index";
import CartPage from "./Pages/CartPage/Index";
import ProductDetailPage from "./Pages/ProductDetailPage/Index";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Pages/ProfilePage/Index";
import BrowsingPage from "./Pages/BrowsingPage";
import Footer from "./Components/Footer/Index";
import SignUp from "./Pages/Signup/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PrivateRoute, PublicRoute } from "./Public&PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <GoogleOAuthProvider
      clientId={
        "925591508840-4gkbjtn5scntgl0ibjjkcpe62a4b52rf.apps.googleusercontent.com"
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Login />} path="/" exact />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<SignUp />} path="/Signup" />
          </Route>
          <Route element={<PublicRoute />}>
            <Route element={<BrowsingPage />} path="/Browsing" />
          </Route>
          <Route element={<PublicRoute />}>
            <Route element={<CategoriesPage />} path="/Categories" />
          </Route>
          {/* <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/Browsing" element={<BrowsingPage />} /> */}
          {/* <Route path="/Listing" element={<NewListing />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Wishlist" element={<WishlistPage />} />
          <Route path="/Explore" element={<ExplorePage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Product-detail" element={<ProductDetailPage />} />
          <Route path="/Profile" element={<ProfilePage />} /> */}
          <Route element={<Footer />} />
          <Route element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
