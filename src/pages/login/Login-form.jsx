// import { useEffect } from "react";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import Doctor from "@/assets/common/background.png";
// import { Input } from "@/components/ui/input";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { SignInSchema } from "./validationSchemas";
// import { Button } from "@/components/ui/button";
// import useAuthStore from "@/services/store/Authstore";



// export default function Loginform() {
  

//   const { signIn, user } = useAuthStore();
//   const form = useForm({
//     resolver: zodResolver(SignInSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   function onSubmit(values) {
//     try {
     
//       SignInSchema.parse(values);
  
    
//       signIn(values);
  
    
//       console.log(values);
//     } catch (e) {
//       console.error('Invalid data', e.errors);
//     }
//   }

//   useEffect(() => {
//     console.log("user", user);
//   }, [user]);

//   return (
//     <div className="flex h-screen">
//       <div
//         className="w-1/2 h-full flex justify-end relative bg-no-repeat bg-cover"
//         style={{ backgroundImage: `url(${Doctor})` }}
//       >
//         <div className="w-full h-full absolute inset-0 bg-teal-600 opacity-50"></div>
//       </div>


//       <div className="bg-white w-1/2 h-full flex items-center justify-center">
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>

//           <div className="flex-col w-1/2 flex ">
//             <div>

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="w-1/2 mt-5 mr-20 text-start text-[#2F2F2F] ">
//                       E-mail address
//                     </FormLabel>
//                     <FormControl className="bg-[#FBFBFB]">
//                       <Input
//                         {...field}
//                         type="email"
//                         placeholder=""
//                         className="mt-3 w-[430px]  h-[45px] bg-[#FBFBFB] border-[#E9E9E9] hover:border-[#068F84]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>


//           <div className="mt-3">

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem className=" space-y-0">
//                   <FormLabel className="w-1/2 mt-5 mr-20 text-start text-[#2F2F2F] ">Password</FormLabel>
//                   <FormControl className="bg-[#FBFBFB] ">
//                     <Input {...field} placeholder="" type="password" 
//                     className="mt-3 w-[430px] h-[45px] bg-[#FBFBFB] border-[#E9E9E9] hover:border-[#068F84]"/>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>



//           <Button type="submit" className=" mt-6 w-full bg-[#068F84] text-lg">
//          Log in
//             </Button>


//         </form>

//         </Form>
//       </div>
//     </div>
//   );
// }





import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Doctor from "@/assets/common/background.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignInSchema } from "./validationSchemas";
import useAuthStore from "@/services/store/Authstore";
import { useEffect } from "react";
import { Loader2Icon } from "lucide-react";

export default function SignInForm() {
  const { signIn, user, isSignInLoading } = useAuthStore();
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    signIn(values);
    console.log(values);
  }

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
       <div className="flex h-screen">
      <div
        className="w-1/2 h-full flex justify-end relative bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Doctor})` }}
      >
        <div className="w-full h-full absolute inset-0 bg-teal-600 opacity-50"></div>
      </div>


      <div className="bg-white w-1/2 h-full flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <div className="flex-col w-1/2 flex ">
            <div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-1/2 mt-5 mr-20 text-start text-[#2F2F2F] ">
                      E-mail address
                    </FormLabel>
                    <FormControl className="bg-[#FBFBFB]">
                      <Input
                        {...field}
                        type="email"
                        placeholder=""
                        className="mt-3 w-[430px]  h-[45px] bg-[#FBFBFB] border-[#E9E9E9] hover:border-[#068F84]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>


          <div className="mt-3">

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className=" space-y-0">
                  <FormLabel className="w-1/2 mt-5 mr-20 text-start text-[#2F2F2F] ">Password</FormLabel>
                  <FormControl className="bg-[#FBFBFB] ">
                    <Input {...field} placeholder="" type="password" 
                    className="mt-3 w-[430px] h-[45px] bg-[#FBFBFB] border-[#E9E9E9] hover:border-[#068F84]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>



          <Button type="submit" className="w-full bg-[#068F84] mt-6 text-lg" disabled={isSignInLoading}>
              {isSignInLoading ? <Loader2Icon className="animate-spin" /> : "Log In"}
            </Button>


        </form>

        </Form>
      </div>
    </div>
  );
}

    








































  /* // import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Doctor from "@/assets/common/background.png";
// import { loginEndpoints } from "@/services/api/endpoints";
// import { instance } from "@/services/api/index";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     console.log("E-mail:", email);
//     console.log("Password:", password);
//     try {
//       const response = await instance.post(loginEndpoints.login, {
//         email,
//         password,
//       });
      
//       console.log("Server Response:", response.data);

//       if (response.data?.access && response.data?.refresh) {
//         localStorage.setItem("accessToken", `Bearer ${response.data.access}`);
//         localStorage.setItem("refreshToken", `Bearer ${response.data.refresh}`);
//         navigate('/hospitals');
//       } else {
//         console.error("Login failed:", response.data?.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex justify-end relative" style={{ backgroundImage: `url(${Doctor})` }}>
//       <div className="w-1/2 h-full absolute inset-0 bg-teal-600 opacity-50"></div>
//       <div className="flex flex-col w-1/2 bg-white h-full justify-center items-center">
//         <label className="w-1/2 text-start mt-2">E-mail address</label>
//         <Input
//           className="w-1/2 mt-3 rounded border-neutral-400 bg-zinc-300 outline-none"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label className="w-1/2 text-start mt-2">Password</label>
//         <Input
//           className="w-1/2 mt-3 rounded border-neutral-400 bg-zinc-300 outline-none"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <p className="text-right w-1/2 my-4 text-emerald-600">
//           <a href="#">Forgot Password?</a>
//         </p>
//         <Button
//           className="w-1/2 rounded outline-none transform duration-300 hover:bg-emerald-500 bg-emerald-600 border-none text-white"
//           variant="outline"
//           onClick={handleLogin}
//         >
//           Sign in
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Login; */

