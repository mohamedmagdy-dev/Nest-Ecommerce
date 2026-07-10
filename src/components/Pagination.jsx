import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap my-10 mx-auto w-fit">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`cursor-pointer flex justify-center items-center w-7 h-7 rounded-full ${
          currentPage === 1
            ? "text-gray-400 bg-gray-100"
            : "text-green-600 bg-green-100"
        }`}
      >
        <KeyboardArrowLeftIcon fontSize="small" />
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`${
            currentPage === i + 1
              ? "text-green-600 bg-green-100"
              : "bg-white shadow-sm"
          } cursor-pointer flex justify-center items-center w-7 h-7 font-bold rounded-full`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`cursor-pointer flex justify-center items-center w-7 h-7 rounded-full ${
          currentPage === totalPages
            ? "text-gray-400 bg-gray-100"
            : "text-green-600 bg-green-100"
        }`}
      >
        <KeyboardArrowRightIcon fontSize="small" />
      </button>
    </div>
  );
}
