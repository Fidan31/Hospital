import React from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";



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

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Toaster /> */}
    </>
  );
}