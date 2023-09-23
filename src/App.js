import React from "react";
import Header from "./header/header";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main/main";
import NewBusiness from "./pages/NewBusiness/newBusiness";

// import Custombutton from "./component/custombutton/custombutton";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/newBusiness" element={<NewBusiness />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
