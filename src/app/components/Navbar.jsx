import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#333333] text-white p-5 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-bold hover:text-blue-500 transition-colors">
              Home
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/login"
                className="px-6 py-2 bg-black text-white rounded-full font-semibold shadow-lg"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-lg hover:text-blue-500 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
