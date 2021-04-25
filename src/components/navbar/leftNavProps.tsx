import React from "react";

const LeftNavProps = (props) => {
  return (
    <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
      <div className="flex-shrink-0 flex items-center md:px-2">
        <img
          className="block lg:hidden h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <img
          className="hidden lg:block h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
          alt="Workflow"
        />
      </div>
      <div className="hidden lg:block sm:ml-6">
        <div className="flex space-x-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

          <a href="#" className="navLinks">
            Rent
          </a>
          <a href="#" className="navLinks">
            Buy
          </a>
          <a href="#" className="navLinks">
            Sell
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNavProps;
