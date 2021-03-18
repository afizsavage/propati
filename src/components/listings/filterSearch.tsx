import { ImSearch } from "react-icons/im";
const FilterSearch = ({ searchLabel }) => {
  return (
    <fieldset className="relative w-full  md:w-1/5">
      <label
        className="block mb-2 text-gray-800 font-bold  "
        htmlFor="formGridCode_month"
      >
        {searchLabel}
      </label>
      <input
        className="w-full h-10 pl-3 pr-3 text-base placeholder-gray-600 rounded-lg focus:outline-none bg-gray-100 hover:bg-white hover:ring-4 ring-teal-400 ring-opacity-20"
        type="text"
        id="formGridCode_month"
        placeholder="Enter city or address"
      />
      <ImSearch className="absolute bottom-3 right-7 text-gray-400" />
    </fieldset>
  );
};

export default FilterSearch;
