export const Header = (params) => {
  return (
    <div className="py-6 text-gray-700 text-center w-2/4 mx-auto">
      <h1 className="w-full block text-xl font-bold">Add Your Property</h1>
      <h3 className=" text-base text-gray-400 mt-2 font-medium">
        Rent your property to blah blah blah of the blah
      </h3>
    </div>
  );
};

export const RentColumn = ({ header, paragraph }) => {
  return (
    <div className="mb-11">
      <h3 className="capitalize w-full block text-lg font-bold mx-auto mb-2">
        {header}
      </h3>
      <p>{paragraph}</p>
    </div>
  );
};

export const ColumnContainer = ({ children }) => {
  return (
    <div className="px-5 flex flex-col text-center text-gray-700">
      {children}
    </div>
  );
};
