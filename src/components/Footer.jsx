// Import Image
import Logo from "../assets/logo.svg";
import AppStore from "../assets/app-store.jpg";
import GooglePlay from "../assets/google-play.jpg";
import PaymentMethods from "../assets/payment-method.png";
// Import Mui icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// Import Component
import Social from "./Social";
// Import React Router
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-3 py-6">
        <div className="flex gap-6 justify-between flex-wrap pb-6 border-b border-[#bce3c9]">
          <div>
            <Link to={"/Home"}>
              <img src={Logo} alt="Nest Logo" className="mb-4 w-40" />
            </Link>
            <p className="mb-4 text-sm">
              Awesome grocery store website template
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-1 text-sm">
                <AlternateEmailIcon
                  className="text-green-400"
                  fontSize="small"
                />
                Call Us:(+91) - 540-025-124553
              </li>
              <li className="flex items-center gap-1 text-sm">
                <AccessTimeIcon className="text-green-400" fontSize="small" />
                Email:sale@Nest.com
              </li>
              <li className="flex items-center gap-1 text-sm">
                <HeadphonesIcon className="text-green-400" fontSize="small" />
                Hours:10:00 - 18:00, Mon - Sat
              </li>
              <li className="flex items-center gap-1 text-sm">
                <FmdGoodIcon className="text-green-400" fontSize="small" />
                Address: 5171 W Campbell Ave undefined Kent,
                <br /> Utah 53127 United States
              </li>
            </ul>
          </div>
          <div className="company">
            <h3 className="font-bold text-xl mb-3">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>About Us</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Delivery Information</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Privacy Policy</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Terms & Conditions</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Contact Us</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Support Center</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div className="account">
            <h3 className="font-bold text-xl mb-3">Account</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Sign In</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>View Cart</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>My Wishlist</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Track My Order</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Shipping Details</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Compare products</Link>
              </li>
            </ul>
          </div>
          <div className="corporate">
            <h3 className="font-bold text-xl mb-3">Corporate</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Become a Vendor</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Affiliate Program</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Farm Business</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Farm Careers</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Our Suppliers</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Accessibility</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Promotions</Link>
              </li>
            </ul>
          </div>
          <div className="popular">
            <h3 className="font-bold text-xl mb-3">Popular</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Milk & Flavoured Milk</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Butter and Margarine</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Eggs Substitutes</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Marmalades</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Sour Cream and Dips</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Tea & Kombucha</Link>
              </li>
              <li className=" hover:text-green-500 duration-200 transform hover:translate-x-2">
                <Link>Cheese</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Install App</h3>
            <p className="mb-4 text-sm">From App Store or Google Play</p>
            <div className="flex gap-2 mb-4">
              <a href="#">
                <img className="w-30" src={AppStore} alt="App Store" />
              </a>
              <a href="#">
                <img
                  className="w-30"
                  src={GooglePlay}
                  alt="Google Play Store"
                />
              </a>
            </div>
            <p className="mb-4 text-sm">Secured Payment Gateways</p>
            <img src={PaymentMethods} alt="Payment Methods" />
          </div>
        </div>

        <div className="bottom-footer pt-6 flex-wrap gap-6 flex justify-center lg:justify-between items-center ">
          <p>
            Copyright {new Date().getFullYear()} © Nest.
            <br /> All rights reserved. Powered by Not Me (:
          </p>
          <div className="contacts flex items-center gap-4 justify-center flex-wrap">
            <div className="items-center gap-3 flex ">
              <SupportAgentIcon fontSize="large" />
              <span className="leading-5 flex items-center flex-col">
                <span className="text-green-400 text-[24px] font-semibold block tracking-wider 	">
                  1900 - 6666
                </span>
                <span className="text-[14px] whitespace-nowrap">
                  Working 8:00 - 22:00
                </span>
              </span>
            </div>
            <div className="items-center gap-3 flex">
              <SupportAgentIcon fontSize="large" />
              <span className="leading-5 flex items-center flex-col">
                <span className="text-green-400 text-[24px] font-semibold block tracking-wider 	">
                  1900 - 888
                </span>
                <span className="text-[14px] whitespace-nowrap">
                  24/7 Support Center
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="flex gap-4 items-center text-lg font-bold">
              Follow Us
              <Social />
            </div>
            <p className="text-sm">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
