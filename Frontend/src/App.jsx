import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import AllUsers from "./pages/allUsers.jsx";
import Settings from "./pages/settings.jsx";
import SearchBar from "./components/searchbar.jsx";

import Login from "./pages/login.jsx";
import Registration from "./pages/registration.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import UsersOutlet from "./utils/usersOutlet.jsx";
import ReceivedRequests from "./pages/receivedRequests.jsx";
import SentRequests from "./pages/sentRequests.jsx";
import MyFriends from "./pages/myFriends.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ChatsProvider from "./context/ChatsContext.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";
import { FriendsProvider } from "./context/FriendsContext.jsx";
import { ReceivedRequestsProvider } from "./context/receivedRequestContext.jsx";
import { SentRequestsProvider } from "./context/sentRequestContext.jsx";
import { MessageProvider } from "./context/messagesContext.jsx";
import { SocketProvider } from "./context/socketContext.jsx";

function App() {
  return (
    <>
      <MessageProvider>
        <SocketProvider>
          <AuthProvider>
            <ChatsProvider>
              <UsersProvider>
                <FriendsProvider>
                  <ReceivedRequestsProvider>
                    <SentRequestsProvider>
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
                            <Route
                              path="friends"
                              element={
                                <UsersOutlet>
                                  <MyFriends />
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
                    </SentRequestsProvider>
                  </ReceivedRequestsProvider>
                </FriendsProvider>
              </UsersProvider>
            </ChatsProvider>
          </AuthProvider>
        </SocketProvider>
      </MessageProvider>
    </>

    // <Login />
  );
}

export default App;
