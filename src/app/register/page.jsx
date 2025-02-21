"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

function RegisterPage() {
  // State สำหรับการแสดง/ซ่อนรหัสผ่านแต่ละช่อง
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className="absolute top-6 left-6 text-white text-lg font-bold">
        <span className="text-white text-3xl">EQ</span>
      </div>

      <div className="absolute top-6 right-6 flex gap-4">
        <a href="/login" className="px-6 py-2 bg-black text-white rounded-full font-semibold shadow-lg cursor-pointer">
          login
        </a>
        <a href="/register" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg">
          signup
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-blue-900">
        <div className="w-full max-w-md bg-[#2D2D2D] border border-gray-600 rounded-xl p-8 shadow-lg">
          <h3 className="text-center text-3xl font-bold mb-6 text-white">Sign Up</h3>
          <form action="">
            <div className="flex gap-4 mb-4">
              <input
                className="w-1/2 p-3 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                type="text"
                placeholder="First name"
              />
              <input
                className="w-1/2 p-3 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              className="block w-full p-3 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
              type="email"
              placeholder="Enter your email"
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="relative mb-6">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁"}
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#4269E2] w-full px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
