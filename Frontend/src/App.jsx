import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Friends from "./pages/friends.jsx";
import Settings from "./pages/settings.jsx";
import SearchBar from "./components/searchbar.jsx";

import Login from "./pages/login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

    // <Login />
  );
}

export default App;
