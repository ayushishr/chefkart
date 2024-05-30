import React from "react";

function Filter({ title, active }) {
  return (
    <div
      className={`py-1 px-4 rounded-full border ${
        active
          ? "border-yellow-500 text-yellow-500 bg-yellow-100"
          : "border-gray-500 text-gray-500"
      } `}
    >
      <p className={`${active && "font-bold"} text-xs`}>{title}</p>
    </div>
  );
}

export default Filter;
