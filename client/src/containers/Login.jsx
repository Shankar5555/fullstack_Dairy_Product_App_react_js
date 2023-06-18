import React, { useState } from "react";
import { logo4, mainscreen1 } from "../assets";
import { LoginnInput } from "../components";
import { FaEnvelope, FaLock } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* background images */}
      <img
        src={mainscreen1}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/* content box */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* Top logo section */}
        <div className="flex items-center justify-start gap-0 w-full">
          <img src={logo4} className="w-20" alt="" />
          <p className="text-headingColor font-semibold text-2">D@Milk</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* Input section */}
        <div className="w-full flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginnInput
            placeholder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
          <LoginnInput
            placeholder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginnInput
              placeholder={"Confirn Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p>
              Doesn't have an account:{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
              >
                Create one
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account:{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* Button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign UP
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign in
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
