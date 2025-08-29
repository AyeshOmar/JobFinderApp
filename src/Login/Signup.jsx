import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Signup = ({ toggleMode }) => {
  

  return (
   <div className="flex items-center  bg-gray-100 p-5">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-120">
            <h2 className="text-2xl font-bold text-center text-cyan-600">Create Account</h2>
            <p className="text-center text-gray-500 mb-6">Sign up to get started</p>


            {/* Full Name Input */}
            <div className="mb-4">
                <div className="flex items-center border rounded-md bg-cyan-50 px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                    type="text"
                    placeholder="Full name"
                    className="bg-transparent outline-none w-full"
                    />
                </div>
            </div>


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


            {/* Confirm Password Input */}
            <div className="mb-4">
                <div className="flex items-center border rounded-md bg-cyan-50 px-3 py-2">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-transparent outline-none w-full"
                    />
                </div>
            </div>


            {/* Terms and Conditions */}
            <div className="flex items-center mb-4 text-sm">
                <input type="checkbox" className="mr-2" />
                <p>
                I agree to the <a href="#" className="text-cyan-600 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-600 hover:underline">Privacy Policy</a>
                </p>
            </div>


            {/* Sign Up Button */}
            <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition">
            Create Account
            </button>


            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400">Or sign up with</span>
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
            Already have an account? <a href="#" className="text-cyan-600 hover:underline">Sign in</a>
            </p>
        </div>
</div>
  );
};

export default Signup;
