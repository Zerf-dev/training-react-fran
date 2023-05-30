import classNames from "classnames/bind";

const styles = {
  base: "w-full text-sm  p-1 my-4 mx-1 md:w-auto md:m-1 lg:text-base lg:mr-3",
  selected: "font-bold border-b-2 border-riquissima",
};

const cx = classNames.bind(styles);

export default function ListButton({
  isSelected,
  onSelect,
  content,
  listLength,
}) {
  return (
    <button
      className={cx({ base: true, selected: isSelected })}
      onClick={() => onSelect()}
    >
      {content} ({listLength})
    </button>
  );
}
