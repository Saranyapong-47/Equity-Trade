"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-blue-900">
      <div className="absolute top-6 left-6 text-white text-lg font-bold">
        <span className="text-white text-3xl">EQ</span>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-6 right-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg">
          login
        </button>
        <Link href="/signup">
          <span className="px-6 py-2 bg-black text-white rounded-full font-semibold shadow-lg cursor-pointer">
            signup
          </span>
        </Link>
      </div>

      {/* Login Box */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Sign in</h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email or mobile phone number</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Your password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈 Hide" : "👁 Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
