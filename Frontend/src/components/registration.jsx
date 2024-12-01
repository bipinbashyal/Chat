import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/services/auth.service.js";

function Registration() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    checkpass: "",
    username: "",
  });

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    if (id == "email") {
      setFormdata({ ...formdata, email: e.target.value });
    } else if (id == "password") {
      setFormdata({ ...formdata, password: e.target.value });
    } else if (id == "username") {
      setFormdata({ ...formdata, username: e.target.value });
    } else if (id == "checkpass") {
      setFormdata({ ...formdata, checkpass: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formdata.password != formdata.checkpass) {
      console.log("password didn't match");
      return;
    }
    try {
      // const response = await axios.post("http://localhost:8080/register", {
      //   email: formdata.email,
      //   password: formdata.password,
      //   username: formdata.username,
      // });
      const response = await registerUser(formdata);
      console.log(response);
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
      {error ? (
        <div className="text-red-600">Error occured.Try again Later...</div>
      ) : null}
      <form
        onChange={(e) => {
          handleChange(e);
        }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-4">
          <input
            type="text"
            id="username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Create password"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="checkpass"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center justify-between ">
          {isLoading ? (
            <button className="opacity-75 cursor-not-allowed bg-gray-800 hover:bg-gray-800 transition-all text-white  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded">
              Register
            </button>
          ) : (
            <button className="bg-gray-800 hover:bg-gray-900 transition-all text-white  py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded">
              Register
            </button>
          )}
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

export default Registration;
