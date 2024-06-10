import React from "react";
import { useState } from "react";
import Doctor from "@/assets/common/background.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="flex h-screen">
        <div
          className="w-1/2 h-full flex justify-end relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${Doctor})` }}
        >
          <div className="w-full h-full absolute inset-0 bg-teal-600 opacity-50"></div>
        </div>

        <div className="flex-col w-1/2 flex justify-center items-center">
          <label className="w-1/2 mr-12 text-start mt-2 text-[#2F2F2F]">
            E-mail adress
          </label>
          <Input className="mt-3" 
          value={email}
          />

          <label className="w-1/2 mt-5 mr-12 text-start text-[#2F2F2F]">
            {" "}
            Password
          </label>
          <Input className="mt-3"
           type="password"
           value={password} />


          <Button variant="default" className="mt-10">
            Sign In
          </Button>

        
        </div>
      </div>
    </div>
  );
};

export default Login;
