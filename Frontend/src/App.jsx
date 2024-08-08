import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Users from "./pages/users.jsx";
import Settings from "./pages/settings.jsx";
import SearchBar from "./components/searchbar.jsx";

import Login from "./pages/login.jsx";
import Registration from "./pages/registration.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./components/privateRoute.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>

    // <Login />
  );
}

export default App;
