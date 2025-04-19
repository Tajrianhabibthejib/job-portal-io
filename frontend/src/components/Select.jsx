import React from "react";

const Select = ({ filter = [], state, setState }) => {
  return (
    <section className="flex flex-col w-full p-4 mx-auto">
      <select
        id="countries"
        className="block w-full p-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {filter.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Select;
