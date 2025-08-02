import { Link, Outlet, useLocation } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { logout } from "../features/auth/authSlicer";
import { useDispatch, useSelector } from "react-redux";
// Mui Icons
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RoomIcon from "@mui/icons-material/Room";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
export default function MyAccount() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    return `mb-2 py-2 pl-5 pr-10  rounded flex gap-2 items-center font-bold whitespace-nowrap ${
      isActive(path)
        ? "bg-[#3bb77e] text-white"
        : "border border-gray-200 text-[#253e4f] "
    }`;
  };

  return (
    <div className="container mx-auto mt-10 px-3 py-10 flex items-center gap-15 max-sm:flex-col">
      <div className="min-lg:ml-20 max-md:w-full self-start">
        <ul className="w-full">
          <li>
            <Link
              to="/MyAccount/Dashboard"
              className={linkClass("/MyAccount/Dashboard")}
            >
              <SettingsIcon fontSize="small" />
              Dashboard
            </Link>
          </li>
          <Link
            to="/MyAccount/Orders"
            className={linkClass("/MyAccount/Orders")}
          >
            <ShoppingBagIcon fontSize="small" />
            Orders
          </Link>
          <li>
            <Link
              to="/MyAccount/TrackOrder"
              className={linkClass("/MyAccount/TrackOrder")}
            >
              <HomeIcon fontSize="small" />
              Track Your Order
            </Link>
          </li>
          <li>
            <Link
              to="/MyAccount/MyAddress"
              className={linkClass("/MyAccount/MyAddress")}
            >
              <RoomIcon fontSize="small" />
              My Address
            </Link>
          </li>
          <li>
            <Link
              to="/MyAccount/AccountDetails"
              className={linkClass("/MyAccount/AccountDetails")}
            >
              <AccountBoxIcon fontSize="small" />
              Account Details
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(logout())}
              to="/Login"
              className={linkClass("/MyAccount/Login")}
            >
              <LogoutIcon fontSize="small" />
              Log Out
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export function Dashboard() {
  const { name } = useSelector((state) => state.auth);
  return (
    <div className="max-sm:text-center">
      <h3 className="font-bold text-green-400 text-4xl mb-3">Hello {name}</h3>
      <p className="text-sm ">
        From your account dashboard. you can easily check & view your recent
        <br />
        orders, manage your shipping and billing addresses and edit your
        <br />
        password and account details.
      </p>
    </div>
  );
}

export function MyAddress() {
  return (
    <div className="flex gap-5 justify-evenly flex-wrap max-[520px]:justify-center ">
      <div className="max-[1029px]:w-full">
        <h3 className="font-bold text-green-400 text-3xl mb-3">
          Billing Address
        </h3>
        <ul className="text-sm text-gray-500">
          <li>3522 Interstate</li>
          <li>75 Business Spur,</li>
          <li>Sault Ste.</li>
          <li>Marie, MI 49783</li>
          <li>New York</li>
        </ul>
        <button className="cursor-pointer text-green-500 mt-2">Edit</button>
      </div>
      <div className="max-[1029px]:w-full">
        <h3 className="font-bold text-green-400 text-3xl mb-3">
          Shipping Address
        </h3>
        <ul className="text-sm text-gray-500">
          <li>4299 Express Lane</li>
          <li>Sarasota,</li>
          <li>FL 34249 USA.</li>
          <li>Phone: 1.941.227.4444</li>
          <li>Sarasota</li>
        </ul>
        <button className="cursor-pointer text-green-500 mt-2">Edit</button>
      </div>
    </div>
  );
}

export function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  return (
    <div>
      <h3 className="font-bold text-[#253e4f] text-4xl mb-4">
        Orders tracking
      </h3>
      <p className="mb-4 text-sm min-lg:w-[500px] text-gray-600">
        To track your order please enter your OrderID in the box below and press
        "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </p>
      <div className="mb-4 min-lg:w-[350px]">
        <label htmlFor="orderId" className="text-sm font-bold">
          Order ID
        </label>
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          type="text"
          id="orderId"
          placeholder="Found In Your Order Confirmation Email"
          className="w-full border border-gray-200 rounded px-5 py-2 outline-none  mt-2  text-sm"
        />
      </div>
      <div className="min-lg:w-[350px]">
        <label htmlFor="billingEmail" className="text-sm font-bold">
          Billing email
        </label>
        <input
          value={billingEmail}
          onChange={(e) => setBillingEmail(e.target.value)}
          type="email"
          id="billingEmail"
          placeholder="Email You Used During CheckOut"
          className="w-full border border-gray-200 rounded px-3 py-2 mt-2 text-sm"
        />
      </div>
      <button className="bg-[#253e4f] text-white rounded px-5 py-2 mt-4 cursor-pointer">
        Track
      </button>
    </div>
  );
}

export function Orders() {
  const orders = [
    {
      id: "#1357",
      date: "March 45, 2020",
      status: "Processing",
      total: "$125.00 for 2 item",
    },
    {
      id: "#2468",
      date: "June 29, 2020",
      status: "Completed",
      total: "$364.00 for 5 item",
    },
    {
      id: "#2366",
      date: "August 02, 2020",
      status: "Completed",
      total: "$280.00 for 3 item",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <h3 className="font-bold text-[#253e4f] text-4xl mb-10">Your Orders</h3>
      <table className="border border-gray-200 w-full whitespace-nowrap ">
        <thead className="text-[#253e4f] font-bold ">
          <tr className="border-b border-gray-200">
            <th className="p-1">Order</th>
            <th className="p-1">Date</th>
            <th className="p-1">Status</th>
            <th className="p-1">Total</th>
            <th className="p-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200 text-sm">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.date}</td>
              <td className="p-4">{order.status}</td>
              <td className="p-4">{order.total}</td>
              <td className="p-4">
                <button className="text-green-500 cursor-pointer">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AccountDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputClass =
    "w-full border border-gray-200 rounded px-5 py-2 outline-none mt-2 text-sm transition duration-200 focus:border-green-500 hover:border-green-500";

  return (
    <div>
      <h3 className="font-bold text-[#253e4f] text-4xl mb-4">
        Account Details
      </h3>

      <div className="flex gap-4 flex-wrap mb-4">
        <div className="grow">
          <label htmlFor="firstName" className="text-sm font-bold">
            First Name *
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            className={inputClass}
          />
        </div>
        <div className="grow">
          <label htmlFor="lastName" className="text-sm font-bold">
            Last Name *
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="displayName" className="text-sm font-bold">
          Display Name *
        </label>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          type="text"
          id="displayName"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-sm font-bold">
          Email Address *
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="currentPassword" className="text-sm font-bold">
          Current Password *
        </label>
        <input
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          type="password"
          id="currentPassword"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="newPassword" className="text-sm font-bold">
          New Password *
        </label>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          id="newPassword"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="text-sm font-bold">
          Confirm Password *
        </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirmPassword"
          className={inputClass}
        />
      </div>

      <button className="bg-green-500 text-white rounded px-5 py-2 mt-4 cursor-pointer transition duration-200 hover:bg-green-600">
        Save Changes
      </button>
    </div>
  );
}
