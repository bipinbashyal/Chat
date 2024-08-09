import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import AllUsers from "./pages/allUsers.jsx";
import Settings from "./pages/settings.jsx";
import SearchBar from "./components/searchbar.jsx";

import Login from "./pages/login.jsx";
import Registration from "./pages/registration.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import UsersOutlet from "./utils/usersOutlet.jsx";
import ReceivedRequests from "./pages/receivedRequests.jsx";
import SentRequests from "./pages/sentRequests.jsx";

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
            <Route path="/users">
              <Route
                path=""
                element={
                  <UsersOutlet>
                    <AllUsers />
                  </UsersOutlet>
                }
              />
              <Route
                path="received"
                element={
                  <UsersOutlet>
                    <ReceivedRequests />
                  </UsersOutlet>
                }
              />
              <Route
                path="sent"
                element={
                  <UsersOutlet>
                    <SentRequests />
                  </UsersOutlet>
                }
              />
            </Route>
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
