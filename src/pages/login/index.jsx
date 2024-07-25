// import Loginform from "./Login-form";
// import { useNavigate } from "react-router-dom";
// import useAuthStore from "@/services/store/Authstore";
// import { useEffect } from "react";

// const Login =() => {
//     const navigate = useNavigate();
//     const { isAuth } = useAuthStore();

//     // useEffect(() => {
//     //     isAuth && navigate("/");
//     //   }, [ navigate]);

//     useEffect(() => {
//         if (isAuth) {
//           navigate("/");
//         }
//       }, [isAuth, navigate]);

// return(
//     <>
//     <Loginform/>
//     </>

// )

// }
// export default Login;

import LoginForm from "./Login-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/services/store/Authstore";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthStore();

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth, navigate]);

  return <LoginForm />;
};

export default Login;
