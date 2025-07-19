export default function Filter({ filterCategories, getFilterBy }) {
  return (
    <ul className="flex gap-4 flex-wrap whitespace-nowrap items-center ">
      {filterCategories.map((category, index) => {
        return (
          <li
            key={index}
            onClick={() => getFilterBy(category)}
            className="cursor-pointer font-bold duration-200 hover:text-green-500"
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export function SectionTitle({ title }) {
  return (
    <h2 className="font-bold text-2xl sm:text-4xl  text-[#253d4e]">
      {title}
    </h2>
  );
}
