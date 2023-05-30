import React from "react";

function FieldSelect({
  id,
  label,
  options = [{ value, optionName, disabled: false }],
  defaultValue,
  setValue,
}) {
  const handleChange = (e) => {
    setValue(id, e.target.value);
  };
  return (
    <div className="m-4 ml-0">
      <div className="font-semibold">{label}</div>
      <select
        className="w-full my-2 p-3 border border-riquissima rounded-lg bg-transparent"
        id={id}
        name={id}
        defaultValue={defaultValue}
        onChange={handleChange}
        required={true}
      >
        {options.map((option) => {
          return (
            <option disabled={option.disabled} value={option.value}>
              {option.optionName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FieldSelect;
