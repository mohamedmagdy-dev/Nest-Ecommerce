import { useRef, useState } from "react";
export default function Table(props) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className={`overflow-x-auto w-full select-none cursor-grab active:cursor-grabbing
      `}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="products max-sm:min-w-[700px] w-full table text-center border border-gray-300 border-collapse">
        {/* Table Header */}
        <div className="table-row bg-gray-200">
          {props.titles.map((title, index) => {
            return (
              <div
                key={index}
                className="table-cell border whitespace-nowrap border-gray-300 p-3 font-bold text-[#253e4f] text-center"
              >
                {title}
              </div>
            );
          })}
        </div>

        {/* Table Body */}
        <div className="table-row-group ">{props.items}</div>
      </div>
    </div>
  );
}
