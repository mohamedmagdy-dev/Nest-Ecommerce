import { ShopButton } from "./Base_Ui";
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
      <ShopButton title="Shop Now"  />
    </div>
  );
}
