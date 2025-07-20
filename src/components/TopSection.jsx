export default function TopSection(props) {
  return <div className="topSection flex flex-col gap-7 ">
    <h2 className="relative mb-10  text-[#253e4f] font-bold text-xl lg:text-3xl after:absolute after:bottom-[-20px] after:left-0  after:bg-green-500 after:h-[2px] after:w-30 before:left-0 before:absolute before:bottom-[-20px] before:bg-gray-200 before:h-[1px] before:w-full">{props.title}</h2>
    {props.children}
  </div>
}