import { Link, useNavigate } from "react-router-dom";
// component
import SectionTitle from "./Base_Ui";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetError } from "../features/auth/authSlicer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import formImg from "../assets/form-img.jpg";

export default function Login() {
  const { isAuth, isLoading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(resetError());

    dispatch(loginUser({ email, password })).then((action) => {
      if (action.type === "auth/loginUser/fulfilled") {
        toast.success("Logged in successfully");
        navigate("/");
      } else if (action.type === "auth/loginUser/rejected") {
        const message = action.payload || "Login failed";
        toast.error(message);
      }
    });
  }
  return (
    <div className="container mx-auto px-3 gap-5 mt-10 flex items-center justify-center max-md:flex-col">
      <img className="w-full md:w-75 rounded" src={formImg} alt="formImg" />
      <form
        onSubmit={handleSubmit}
        className=" w-full md:w-[400px] shadow-sm p-5 rounded "
      >
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
        {error && (
          <p className="text-red-500 text-center mt-3 font-bold">{error}</p>
        )}

        <button
          type="submit"
          className="mt-4 text-white flex items-center mx-auto justify-center shadow-sm duration-200  hover:bg-green-600 focus:bg-green-600 bg-green-500 w-22 h-8 rounded font-bold "
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
