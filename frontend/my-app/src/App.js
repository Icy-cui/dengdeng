import "./App.css";
import Header from "./components/Header.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import UserList from "./components/UserList.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}
