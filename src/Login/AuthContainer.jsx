import React, { useState } from "react";
import { motion } from "framer-motion";
import Signup from "./Signup";
import Signin from "./Signin";

export default function AuthContainer() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="mt-25 bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-[1150px] h-[640px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Cyan Panel */}
        <motion.div
          initial={false}
          animate={{ x: isSignUp ? "20%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute top-0 h-full w-[56%] bg-cyan-500 text-white flex flex-col items-center justify-center z-10 ${
            isSignUp ? "right-0 rounded-l-[220px]" : "left-0 rounded-r-[220px]"
          }`}
        >
          {isSignUp ? (
            <div className="text-center px-10">
              <h3 className="text-3xl font-semibold mb-2">Welcome Back</h3>
              <p className="mb-6 opacity-90">To keep connected with us please login</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white/90 px-6 py-2 rounded-full hover:bg-white hover:text-cyan-600 transition"
              >
                Sign in
              </button>
            </div>
          ) : (
            <div className="text-center px-10">
              <h3 className="text-3xl font-semibold mb-2">New here ?</h3>
              <p className="mb-6 opacity-90">Sign up and discover our platform</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white/90 px-6 py-2 rounded-full hover:bg-white hover:text-cyan-600 transition"
              >
                Sign up
              </button>
            </div>
          )}
        </motion.div>

        {/* Forms */}
        <div className="absolute inset-0 flex">
          {/* Left Side - SignUp */}
          <div className={`w-1/2 flex items-center justify-center p-8 transition-opacity duration-500 ${
            isSignUp ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}>
            <Signup />
          </div>

          {/* Right Side - SignIn */}
          <div className={`ml-auto w-1/2 flex items-center justify-center p-8 transition-opacity duration-500 ${
            isSignUp ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}>
            <Signin />
          </div>
        </div>
      </div>
    </div>
  );
}
