import classNames from "classnames/bind";

const cx = classNames.bind();

export default function ListButton({
  isSelected,
  onSelect,
  content,
  listLength,
}) {
  return (
    <button
      className={cx(
        "w-full text-sm  p-1 my-4 mx-1 md:w-auto md:m-1 lg:text-base lg:mr-3",
        { "font-bold border-b-2 border-riquissima": isSelected }
      )}
      onClick={onSelect}
    >
      {content} ({listLength})
    </button>
  );
}
