import React from "react";

function FieldInput({
  id,
  label,
  placeholder,
  type = "text",
  setValue,
  underText,
  maxCharacters,
}) {
  const handleChange = (e) => {
    setValue(id, e.target.value);
  };
  return (
    <div className="m-4 ml-0">
      <div className="font-semibold">{label}</div>
      <input
        className="w-full my-2 p-3 border border-riquissima rounded-lg bg-transparent"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        required={true}
        maxLength={maxCharacters}
      />
      <div className="text-xs">{underText}</div>
    </div>
  );
}

export default FieldInput;
