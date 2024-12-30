import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    if (!email.current || !password.current) {
      setErrorMessage('Mandatory fields are missing');
      return;
    }
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    // SignIn and SignUp Logic
    if(!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL:USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });

    } else {
      // Signin Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-full md:w-4/12 my-28 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Enter full name"
          className="p-4 px-2 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 px-2 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-black bg-opacity-70 text-white border border-white"
        />
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button className="p-3 my-3 bg-red-700 w-full rounded-md font-bold text-1xl" onClick={handleButtonClick}>
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
