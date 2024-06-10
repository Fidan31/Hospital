import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Hospitals from "./pages/hospitals/Hospitals";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="" element={<Hospitals />}/>
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
