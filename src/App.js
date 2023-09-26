import React from "react";
import Header from "./header/header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main/main";
import NewBusiness from "./pages/NewBusiness/newBusiness";
import Checklist from "./pages/Checklist/checklist";
import Loader from "./pages/Loader/loader";
import Analyze from "./pages/Analyze/analyze";
import NewMap from "./pages/NewMap/newMap";
import Userpage from "./pages/Userpage/userpage";
import Recommend from "./pages/Recommend/recommend";
import LogoPage from "./pages/logo/logo";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LogoPage />} />

          <Route
            path="/main"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/newBusiness"
            element={
              <>
                <Header />
                <NewBusiness />
              </>
            }
          />
          <Route
            path="/checklist"
            element={
              <>
                <Header />
                <Checklist />
              </>
            }
          />
          <Route
            path="/loader"
            element={
              <>
                <Header />
                <Loader />
              </>
            }
          />
          <Route
            path="/analyze"
            element={
              <>
                <Header />
                <Analyze />
              </>
            }
          />
          <Route
            path="/newmap"
            element={
              <>
                <Header />
                <NewMap />
              </>
            }
          />
          <Route
            path="/userpage"
            element={
              <>
                <Header />
                <Userpage />
              </>
            }
          />
          <Route
            path="/recommend"
            element={
              <>
                <Header />
                <Recommend />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
