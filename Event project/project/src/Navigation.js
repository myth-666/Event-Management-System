import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./login";
import Register from "./register";
import Home from "./home";



export default function Navigation() {
  return (	
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Home />} path="/home"></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
