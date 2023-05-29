import React from "react";

function FieldInput({ id, label, placeholder, type = "text", setValue }) {
  const handleChange = (e) => {
    setValue(id, e.target.value);
  };
  return (
    <div className="flex flex-col mt-2 w-[500px]">
      <div className="text-zerf-ebonyClay font-normal text-md my-1">
        {label}
      </div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default FieldInput;
