import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Login successful!");
        setToken(response.data.token);
        navigate("/admin");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] m-auto  w-[90%] sm:max-w-96 mt-14 gap-4 text-gray-800 ">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-2 mt-10 ">
          <h1 className="prata-regular text-3xl dark:text-gray-200 text-center">
            Admin Login
          </h1>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800 dark:bg-gray-300" />
        </div>

        {/* Login Card */}

        <form onSubmit={onSubmitHandler} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 text-white bg-black rounded-lg
                          hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 
                          dark:bg-[#222] dark:hover:bg-[#333] dark:focus:ring-gray-800
                          transition-all duration-200 flex justify-center items-center
                          ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 dark:text-gray-300 dark:hover:text-gray-300"
            onClick={(e) => {
              e.preventDefault();
              toast.info(
                "Please contact your administrator for password reset."
              );
            }}
          >
            Forgot your password?
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          Need help? Contact admin@kharidari.com
        </div>
      </div>
    </div>
  );
};

export default Login;
