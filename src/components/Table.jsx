export default function Table(props) {
  return (
    <div className="overflow-x-auto w-full">
      <div className="products max-sm:min-w-[700px] w-full table text-center border border-gray-300 border-collapse">
        {/* Table Header */}
        <div className="table-row bg-gray-200">
          {props.titles.map((title) => {
            return (
              <div className="table-cell border border-gray-300 p-3 font-bold text-[#253e4f] text-left">
                {title}
              </div>
            );
          })}
        </div>

        {/* Table Body */}
        <div className="table-row-group">{props.items}</div>
      </div>
    </div>
  );
}
