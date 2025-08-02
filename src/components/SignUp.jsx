import { Link } from "react-router-dom";
import SectionTitle from "./Base_Ui";
import { useDispatch } from "react-redux";
import { signup } from "../features/auth/authSlicer";
import { useState } from "react";
import formImg from "../assets/form-img.jpg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reWritePassword, setReWritePassword] = useState("");
  const dispatch = useDispatch();

  function validateForm() {
    if (
      name.length >= 3 &&
      password === reWritePassword &&
      reWritePassword.length > 5 &&
      password.length > 5
    ) {
      dispatch(
        signup({
          user: {
            name: name,
            email: email,
            password: password,
            reWritePassword: reWritePassword,
          },
          token: "321231",
        })
      );
    }
  }
  return (
    <div className="container mx-auto px-3 gap-5 mt-10 flex justify-center max-md:flex-col">
      <img className="w-full md:w-75 rounded" src={formImg} alt="formImg" />
      <form className=" w-full md:w-[400px] shadow-sm p-5 rounded ">
        <SectionTitle title="Sign Up" />
        <div className="mt-2">
          <label htmlFor="name">Name </label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="text"
            id="name"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="email">Email </label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="text"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password: </label> <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="ReWrite-password">ReWrite Password: </label> <br />
          <input
            value={reWritePassword}
            onChange={(e) => setReWritePassword(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="password"
            id="ReWrite-password"
            placeholder="ReWrite Password"
          />
        </div>
        <p className="my-4">
          You Have Account ?
          <Link to="/Login" className="font-bold text-green-500 ml-2">
            LogIn
          </Link>
        </p>
        <Link
          onClick={() => validateForm()}
          className="text-white flex items-center mx-auto justify-center shadow-sm duration-200 hover:bg-green-600 focus:bg-green-600 bg-green-500 w-22 h-8 rounded font-bold "
          to={"/MyAccount/Dashboard"}
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
}
