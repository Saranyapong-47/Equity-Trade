"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

function LoginPage() {
  // ประกาศ state สำหรับแสดง/ซ่อนรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="absolute top-6 left-6 text-white text-lg font-bold">
        <span className="text-white text-3xl">EQ</span>
      </div>

      <div className="absolute top-6 right-6 flex gap-4">
        <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg">
          login
        </a>
        <a href="/register" className="px-6 py-2 bg-black text-white rounded-full font-semibold shadow-lg">
          signup
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-blue-900">
        <div className="w-full max-w-md bg-[#2D2D2D] border border-gray-600 rounded-xl p-8 shadow-lg">
          <h3 className="text-center text-3xl font-bold mb-6 text-white">Sign In</h3>
          <form action="">
            <input
              className="block w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="email"
              placeholder="Enter your email"
            />
            <div className="relative mb-6">
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

            <button
              type="submit"
              className="bg-[#4269E2] w-full px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
