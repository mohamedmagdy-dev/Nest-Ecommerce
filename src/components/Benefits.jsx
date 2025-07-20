
export default function Benefits(props) {
  return (
    <div className="benefit flex gap-5 items-center group bg-gray-200 p-5 rounded">
      <img src={props.image} className="duration-200 transform group-hover:translate-y-[-10px]" alt={props.title} />
      <div className="info">
        <h3 className="text-[#253e4f] font-bold text-lg">{props.title}</h3>
        <p className="text-gray-600">{props.desc}</p>
      </div>
    </div>
  );
}
