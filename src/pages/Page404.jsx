import error404img from "../assets/page-404.png";
import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div className="px-3 flex justify-center items-center flex-col mt-20 pb-10">
      <img src={error404img} alt="404"  />
      <p className="text-center mt-5">
        The link you clicked may be broken or the page may have been removed.
        <br />
        visit the Homepage{" "}
        <Link className="font-bold text-green-500" to="/Home">
          Home
        </Link>
      </p>
    </div>
  );
}
