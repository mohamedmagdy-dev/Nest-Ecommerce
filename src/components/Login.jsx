import { Link } from "react-router-dom";
// component
import SectionTitle from "./Base_Ui";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlicer";
import { useState } from "react";
import formImg from "../assets/form-img.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto px-3 gap-5 mt-10 flex items-center justify-center max-md:flex-col">
      <img className="w-full md:w-75 rounded" src={formImg} alt="formImg" />
      <form className=" w-full md:w-[400px] shadow-sm p-5 rounded ">
        <SectionTitle title="Log In" />
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
        <p className="my-4">
          You Don't Have Account ?
          <Link to="/SignUp" className="font-bold text-green-500  ml-2">
            SignUp
          </Link>
        </p>
        <Link
          onClick={() =>
            dispatch(
              login({
                user: { email: email, password: password },
                token: "321231",
              })
            )
          }
          className="text-white flex items-center mx-auto justify-center shadow-sm duration-200  hover:bg-green-600 focus:bg-green-600 bg-green-500 w-22 h-8 rounded font-bold "
          to={"/MyAccount/Dashboard"}
        >
          Login
        </Link>
      </form>
    </div>
  );
}
