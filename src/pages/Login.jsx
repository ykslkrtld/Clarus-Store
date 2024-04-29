import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLocaleLowerCase() === "admin@yksl.com" && pass === "admin123") {
      console.log({ email, pass });
      login({ email, pass });
    } else {
      alert("Kullanıcı bilgileri yanlış");
    }
  };
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-10/12 sm:w-[25rem] bg-white p-5 flex flex-col justify-center text-center ">
        <div className="flex justify-center items-center mt-2 gap-2 ">
          <span className="w-[6px] h-[39px] bg-red-500 "></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase ">
            Yksl Store
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600] text-[22px] ">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1">
            Enter your credentials to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left p-3 gap-5 "
        >
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@yksl.com'] hover:after:text-red-500 hover:after:pl-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin123'] hover:after:text-red-500 hover:after:pl-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="bg-red-500 h-[44px] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px] ">
            Sign In
          </button>
          <p className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Forgot your password?
            </span>
            <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1 ">
              Reset password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
