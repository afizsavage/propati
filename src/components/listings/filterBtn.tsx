const FilterBtn = (params) => {
  return (
    <div className="inline-block ">
      <button type="button" className="filterBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5 text-gray-500 mr-2 font-bold"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
        Filters
      </button>
    </div>
  );
};

export default FilterBtn;
