import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "./Base_Ui";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, resetError } from "../features/auth/authSlicer";
import { useEffect, useState } from "react";
import formImg from "../assets/form-img.jpg";
import toast from "react-hot-toast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reWritePassword, setReWritePassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  function validateForm(e) {
    e.preventDefault();

    if (name.trim().length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 chars");
      return;
    }

    if (password !== reWritePassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(resetError());

    // Dispatch Signup Action
    dispatch(
      signupUser({
        name,
        email,
        password,
      })
    ).then((action) => {
      if (action.type === "auth/signupUser/fulfilled") {
        toast.success("Account created successfully");
        navigate("/");
      } else if (action.type === "auth/signupUser/rejected") {
        const message = action.payload || "Signup failed";
        toast.error(message);
      }
    });
  }

  return (
    <div className="container mx-auto px-3 gap-5 mt-10 flex justify-center max-md:flex-col">
      <img className="w-full md:w-75 rounded" src={formImg} alt="formImg" />
      
      <form 
        onSubmit={validateForm}
        className=" w-full md:w-[400px] shadow-sm p-5 rounded "
      >
        <SectionTitle title="Sign Up" />

        <div className="mt-2">
          <label htmlFor="name">Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="text"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="email">Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password">Password: </label>
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
          <label htmlFor="ReWrite-password">ReWrite Password: </label>
          <input
            value={reWritePassword}
            onChange={(e) => setReWritePassword(e.target.value)}
            className="mt-2 outline-none border border-gray-200 px-3 py-1 w-full rounded"
            type="password"
            id="ReWrite-password"
            placeholder="ReWrite Password"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center mt-3 font-bold">
            {error}
          </p>
        )}

        <p className="my-4">
          You Have Account ?
          <Link to="/Login" className="font-bold text-green-500 ml-2">
            LogIn
          </Link>
        </p>

        <button
          type="submit"
          className="text-white cursor-pointer flex items-center mx-auto justify-center shadow-sm duration-200 hover:bg-green-600 focus:bg-green-600 bg-green-500 w-22 h-8 rounded font-bold"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
