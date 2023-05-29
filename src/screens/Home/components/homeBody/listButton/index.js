const selectedStyle =
  "w-full text-sm  p-1 my-4 mx-1 md:w-auto md:m-1 lg:text-base lg:mr-3 font-bold border-b-2 border-riquissima";
const unselectedStyle =
  "w-full text-sm p-1 my-4 mx-1 md:w-auto md:m-1 lg:text-base lg:mr-3";

export default function ListButton({
  isSelected,
  onSelect,
  content,
  listLength,
}) {
  return (
    <button
      className={isSelected ? selectedStyle : unselectedStyle}
      onClick={() => {
        onSelect();
      }}
    >
      {content} ({listLength})
    </button>
  );
}
