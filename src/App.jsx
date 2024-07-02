import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Hospitals from "./pages/hospitals/Hospitals";
import ProtectedRoute from "./pages/login/ProtectedRoute";


// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login/>}/>
//           <Route path="/hospitals" element={<Hospitals />}/>

//         </Routes>
//       </Router>
//     </>
//   );
// };

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route
            path="/hospitals"
            element={
              <ProtectedRoute>
                <Hospitals />
              </ProtectedRoute>
            }
          />
          {/* Добавьте другие маршруты */}
        </Routes>
      </Router>
  
  );
}

export default App;
