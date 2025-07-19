import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Category(props) {
  return (
    <div
      className={`category select-none h-40 min-sm:min-h-60  flex items-start gap-3 justify-center flex-col p-5 rounded shadow-md`}
      style={{
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-bold text-xl sm:text-2xl text-[#253d4e]">
        {props.title}
      </h2>
      <button>
        <Link className="bg-[#3bb77e] font-bold text-white flex justify-between items-center duration-300 gap-1 hover:gap-2 px-4 py-2 rounded">
          Shop Now
          <ArrowRightAltIcon />
        </Link>
      </button>
    </div>
  );
}
