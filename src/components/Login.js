import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg" />
      </div>
      <form className="absolute p-12 bg-black w-4/12 my-28 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter full name"
          className="p-4 px-2 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 px-2 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />
        <button className="p-3 my-3 bg-red-700 w-full rounded-md font-bold text-1xl">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex items-center justify-center my-3 text-md font-medium">
          OR
        </div>
        <button className="p-3 my-3 bg-gray-600 w-full rounded-md font-bold text-1xl bg-opacity-45">
          Use a sign-in code
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already a member? Sign In "}</p>
      </form>
    </div>
  );
};

export default Login;