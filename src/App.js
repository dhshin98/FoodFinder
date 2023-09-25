import React from "react";
import Header from "./header/header";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main/main";
import NewBusiness from "./pages/NewBusiness/newBusiness";
import Checklist from "./pages/Checklist/checklist";
import Loader from "./pages/Loader/loader";
import Analyze from "./pages/Analyze/analyze";
import NewMap from "./pages/NewMap/newMap";
import Userpage from "./pages/Userpage/userpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/newBusiness" element={<NewBusiness />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/newmap" element={<NewMap />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
