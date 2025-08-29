import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";



const Signin = () => {


  return (
    <div className="flex  bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center text-cyan-600">Welcome Back</h2>
            <p className="text-center text-gray-500 mb-6">Sign in to your account</p>


            {/* Email Input */}
            <div className="mb-4">
                <div className="flex items-center border rounded-md bg-cyan-50 px-3 py-2">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent outline-none w-full"
                    />
                </div>
            </div>


            {/* Password Input */}
            <div className="mb-4">
                <div className="flex items-center border rounded-md bg-cyan-50 px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent outline-none w-full"
                    />
                </div>
            </div>


            {/* Remember & Forgot */}
            <div className="flex justify-between items-center mb-4 text-sm">
                <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-cyan-600 hover:underline">
                Forgot password?
                </a>
            </div>


            {/* Sign In Button */}
            <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition">
            Sign in
            </button>


            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
            </div>


            {/* Social Buttons */}
            <div className="flex justify-center space-x-4">
                <button className="p-3 border rounded-md hover:bg-gray-50">
                <FcGoogle size={20} />
                </button>
                <button className="p-3 border rounded-md hover:bg-gray-50 text-blue-600">
                <FaFacebook size={20} />
                </button>
                <button className="p-3 border rounded-md hover:bg-gray-50 text-black">
                <FaXTwitter size={20} />
                </button>
            </div>


            {/* Footer */}
            <p className="text-center text-gray-500 mt-6 text-sm">
            If you don't have an account, <a href="#" className="text-cyan-600 hover:underline">Do Sign Up</a>
            </p>
        </div>
    </div>
  );
};

export default Signin;
