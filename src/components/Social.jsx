import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Social(props) {
  return (
    <div className={`social flex gap-3 ${props.style}`}>
      <a
        href="#"
        className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white"
      >
        <FacebookIcon fontSize="small" />
      </a>
      <a
        href="#"
        className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white"
      >
        <XIcon fontSize="small" />
      </a>
      <a
        href="#"
        className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white"
      >
        <InstagramIcon fontSize="small" />
      </a>
      <a
        href="#"
        className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white"
      >
        <YouTubeIcon fontSize="small" />
      </a>
    </div>
  );
}
