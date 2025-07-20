import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function ShopButton(props) {
  return (
    <button>
      <Link
        to={`/${props.route}`}
        className="bg-[#3bb77e] font-bold text-white flex justify-between items-center duration-300 gap-1 hover:gap-2 px-4 py-2 rounded"
      >
        Shop Now
        <ArrowRightAltIcon />
      </Link>
    </button>
  );
}
