import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftNavProps = (props) => {
  const router = useRouter();

  return (
    <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/">
          <a>
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </a>
        </Link>
      </div>
      <div className="hidden lg:block sm:ml-6">
        <div className="flex space-x-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href="/apartments">
            <a
              className={
                router.pathname == "/apartments"
                  ? "navLinks text-teal-600"
                  : "navLinks "
              }
            >
              Rent
            </a>
          </Link>
          <Link href="/listings/listings-buy">
            <a
              className={
                router.pathname == "/listings/listings-buy"
                  ? "navLinks text-teal-600"
                  : "navLinks "
              }
            >
              Buy
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNavProps;
