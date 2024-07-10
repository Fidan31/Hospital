// import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Login from "@/pages/login";
// import Persist from "./components/persist/persist";
// import useAuthStore from "./services/store/Authstore";


// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route>
//         <Route path="*"/>
//         <Route element={<Persist />}>
        
        
         
//         </Route>
//         <Route
//           index
//           path="login"
//           element={
//             useAuthStore.getState().isAuth !== undefined && useAuthStore.getState().isAuth ? (
//               <Navigate to={"/"} replace />
//             ) : (
//               <Login />
//             )
//           }
//         />
//       </Route>,
//     ),
//   );
  
//   export { router };









// import React from 'react';
// import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Login from "@/pages/login";
// import Persist from "./components/persist/persist";
// import useAuthStore from "./services/store/Authstore";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="*" element={<Navigate to="/login" replace />} />
//       <Route element={<Persist />}>
     
//       </Route>
//       <Route
//         path="login"
//         element={
//           useAuthStore.getState().isAuth !== undefined && useAuthStore.getState().isAuth ? (
//             <Navigate to="/" replace />
//           ) : (
//             <Login />
//           )
//         }
//       />
//     </Route>
//   )
// );

// export { router };








import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "@/pages/login";
import Persist from "@/components/persist/persist";
import useAuthStore from "@/services/store/Authstore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route element={<Persist />}>
        {/* Add your authenticated routes here */}
      </Route>
      <Route
        path="login"
        element={
          useAuthStore.getState().isAuth !==undefined && useAuthStore.getState().isAuth ?  (
            <Navigate to="/" replace />
          ) : (
            <Login />
          )
        }
      />
    </Route>
  )
);

export { router };
