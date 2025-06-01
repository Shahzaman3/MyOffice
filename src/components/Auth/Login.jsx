import React, { useState } from "react";

export const Login = ({loginHandler}) => {


      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const submitHandler = (e) => {
            e.preventDefault();
            loginHandler(email, password);
            setEmail("");
            setPassword("");
      }

      return ( 
            <div className="h-screen w-full bg-[#1c1c1c] flex justify-center items-center">
                  <div className="border-2 border-emerald-600 rounded-2xl p-20">
                        <form 
                        onSubmit={(e)=>{
                              submitHandler(e)
                        }} 
                        className="flex flex-col">
                              <input
                              value={email}
                              onChange={(e) => {
                                    setEmail(e.target.value);
                              }} 
                              className="overlay-none text-white border-2 border-emerald-600 rounded-full px-6 py-2" type="email" placeholder="Enter your email" />
                              <input
                              value={password}
                              onChange={(e) => {
                                    setPassword(e.target.value);
                              }} 
                              className="overlay-none text-white border-2 border-emerald-600 rounded-full mt-3 px-6 py-2" type="password" placeholder="Enter your password" />
                              <button className="bg-emerald-600 text-white rounded-full mt-10 px-4 py-2">Login</button>
                        </form>
                  </div>
            </div>
       );
}
 export default Login;