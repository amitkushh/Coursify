import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10 px-5">
      <h2 className="text-3xl font-semibold">Login</h2>
      <form className="flex flex-col justify-center items-center gap-3">
        <input
          type="text"
          required
          placeholder="Enter your first name"
          className="py-3 border-2 pl-3 rounded-md outline-none sm:w-96 md:w-96"
        />
        <input
          type="text"
          required
          placeholder="Enter your last name"
          className="py-3 border-2 pl-3 rounded-md outline-none sm:w-96 md:w-96"
        />
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="py-3 border-2 pl-3 rounded-md outline-none sm:w-96 md:w-96"
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="py-3 border-2 pl-3 rounded-md outline-none sm:w-96 md:w-96"
        />
        <button className="hover:bg-[#FFB22C] bg-[#C7D9DD] cursor-pointer rounded-sm py-3 px-5 text-white font-semibold w-full">
          Sign Up
        </button>
      </form>
      <p>
        If already have and account{" "}
        <Link to="/login">
          <span className="text-yellow-600">click here</span>
        </Link>
      </p>
    </div>
  );
}

export default Signup;
