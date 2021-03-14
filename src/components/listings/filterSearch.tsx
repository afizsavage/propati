const FilterSearch = ({ searchLabel }) => {
  return (
    <fieldset className="relative w-full pr-4 md:w-1/5">
      <label
        className="block mb-2 text-gray-800 font-bold  "
        htmlFor="formGridCode_month"
      >
        {searchLabel}
      </label>
      <input
        className="w-full h-10 pl-11 pr-3 text-base placeholder-gray-600 rounded-lg focus:outline-none bg-gray-100 hover:bg-white hover:ring-4 ring-teal-400 ring-opacity-20"
        type="text"
        id="formGridCode_month"
      />
      <div className="absolute bottom-3 left-2 flex items-center px-2 pointer-events-none ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </fieldset>
  );
};

export default FilterSearch;
