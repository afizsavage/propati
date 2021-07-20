import React from "react";
import SubmitBtn from "../auth/submitBtn";
import FormatPrice from "../utils/priceFormatter";

const ApplyCard = ({ itemPrice }) => {
  console.log(itemPrice);
  return (
    <div className="flex flex-grow flex-col pl-12">
      <div
        className="auth-card my-0 w-full sticky top-28 border-purple-500
        "
      >
        <form
          id="signupForm"
          className=""
          onSubmit={() => console.log("clicked")}
        >
          <div className="px-8 pt-8">
            <div className="w-full text-center font-medium text-gray-400 text-sm">
              {" "}
              <span>Yearly Rate</span>
            </div>

            <div className="mt-2 inline-flex justify-center text-2xl text-gray-700 font-semibold w-full">
              <span>{FormatPrice.format(itemPrice)}</span>
            </div>
          </div>
          <div className="w-full text-xs font-semibold py-2 inline-flex justify-center mt-5 bg-gray-100">
            <span className="text-center">Currently Available</span>
          </div>

          <SubmitBtn
            btnText="Apply"
            loading={null}
            style={" bg-purple-500 hover:bg-purple-600"}
          />
        </form>
      </div>
    </div>
  );
};

export default ApplyCard;
