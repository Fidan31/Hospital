// import React from "react";
// import useAuthStore from "@/services/store/Authstore";
// import { Navigate, Outlet } from "react-router-dom";


// export default function Persist() {
//   const { isAuth } = useAuthStore();

  

//   return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
// }





import { useEffect } from "react";
import useAuthStore from "@/services/store/Authstore";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../spinner/spinner";

export default function Persist() {
  const { isAuth, isUserLoading, currentUser } = useAuthStore();

  useEffect(() => {
  
    if (isAuth === undefined) {
      currentUser();
    }
  }, [isAuth, currentUser]);

  if (isAuth === undefined || isUserLoading) return <Spinner />;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
