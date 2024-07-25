import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Create password"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center justify-between ">
          <button className="bg-gray-800 hover:bg-gray-900 transition-all text-white  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded">
            Register
          </button>
        </div>
      </form>
      <div className="mt-5 text-center">
        Already have a account?
        <Link to="/login">
          <span className="cursor-pointer text-blue-800 font-semibold hover:text-blue-600">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
