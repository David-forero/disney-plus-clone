import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Detail from "./components/Detail";
import AppComponent from "./views/layouts/AppComponent";

function App() {
  return (
    <BrowserRouter>
      {/* Public */}
      <Routes>
        <Route path="/" element={<AppComponent />}>
          <Route path="/detail" element={<Detail />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
