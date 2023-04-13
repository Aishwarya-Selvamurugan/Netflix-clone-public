import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NetFlix from "./pages/NetFlix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserList from "./pages/UserList";
import IndivMovie from "./pages/IndivMovie";
import LoadingPage from "./pages/LoadingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<NetFlix />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/mylist" element={<UserList />} />
        <Route exact path="/IndivMovie" element={<IndivMovie />} />
        {/* <Route exact path="/loading" element={<LoadingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
