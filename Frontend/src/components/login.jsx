import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    if (id == "username") {
      setFormdata({ ...formdata, username: e.target.value });
    } else if (id == "password") {
      setFormdata({ ...formdata, password: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/login", formdata);
    console.log(response.data);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form
        onChange={(e) => {
          handleChange(e);
        }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
          <div className="text-gray-500 text-right mt-2 cursor-pointer hover:underline">
            forgot password?
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 transition-all text-white  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-5 text-center">
        Dont have an account?{" "}
        <Link to="/register">
          <span className="cursor-pointer text-blue-800 font-semibold hover:text-blue-600">
            Signup
          </span>
        </Link>
      </div>
      <div className="mt-5">
        <div className="flex items-center mb-5">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button className="relative gap-3 mb-5 bg-blue-700 hover:bg-blue-600 transition-all text-white  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded">
          <div className="inline absolute left-2 top-1.6">
            <svg
              className="inline"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </div>
          Login with Facebook
        </button>

        <button className="relative bg-white hover:bg-gray-50 transition-all text-gray-500  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded border border-gray-500">
          <div className="inline absolute left-2 top-1">
            <svg
              className="inline"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              height="2em"
              width="2em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
            </svg>
          </div>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
