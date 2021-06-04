import React from "react";
import { useStep, useForm } from "react-hooks-helper";
// import { useForm } from "react-hook-form";
import { AddPropertyProps, InProps } from "../../interfaces/";

import { InputField } from "../auth/authform";
import { SubmitBtn } from "../auth";
import Dropdown from "../utils/dropDown";

type StepsObject = {
  id: any;
};

const steps: Array<StepsObject> = [
  { id: "address" },
  { id: "propertyType" },
  { id: "submit" },
];

const defaultData = {
  address: "",
  unit: "",
  propertyType: "Anytown",
};

const Address = ({ navigation, setForm, formData }) => {
  const { address, unit } = formData;

  const { previous, next } = navigation;

  return (
    <div className="w-2/3 mt-16 mx-auto">
      <div className="font-Lato text-3xl text-gray-600 mb-5">
        <h3>Hi! Let's get started creating your property.</h3>
      </div>
      <div className="w-4/5">
        <span className="text-sm font-semibold text-gray-500">STEP 1</span>

        <InputField
          name="address"
          placeholder="Address"
          type="text"
          customStyle="placeholder-black"
          value={address}
          onChange={setForm}
        />
        <InputField
          name="unit"
          placeholder="Unit# (optional)"
          type="text"
          customStyle="placeholder-black"
          value={unit}
          onChange={setForm}
        />
        <div>
          <button
            className="bg-teal-600 rounded px-3 py-2 text-sm font-bold text-white mt-3"
            onClick={next}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const UserPill = (params) => {
  return (
    <div className="bg-white w-full inline-flex font-Lato  ">
      <div className="input-container">
        <span className="w-full inline-flex ">Select </span>
      </div>
    </div>
  );
};

const PropertyType = ({ setForm, formData, navigation }) => {
  const { propertyType } = formData;
  const { previous, next } = navigation;

  return (
    <div className="w-full h-screen overflow-hidden relative ">
      <div className="mt-16 h-full">
        <div className="font-Lato font-bold text-2xl text-gray-600 mb-5">
          <h3>Select your property type</h3>
        </div>
        <div className="w-4/5 h-full">
          <span className="text-sm font-semibold text-gray-500">STEP 2</span>
          <Dropdown
            buttonText={"Select One"}
            listItems={["one", "two"]}
            customStyle="w-full"
            changeBtnText={true}
          />
          <div className="absolute  py-5 w-full bottom-0">
            <div className="flex inline-flex justify-between w-full">
              <button
                className="bg-teal-600 rounded px-3 py-2 text-sm font-bold text-white mt-3"
                onClick={previous}
              >
                Previous
              </button>
              <button
                className="bg-teal-600 rounded px-3 py-2 text-sm font-bold text-white mt-3"
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const onSubmit = async (payload: any, e: any) => {
  e.preventDefault();

  const { address, propertyType } = payload;

  console.log(address, propertyType);
};

const Submit = ({ navigation, formData }) => {
  const { propertyType, address } = formData;

  const { go } = navigation;
  return (
    <div>
      <h3>Thank you for submitting. We will b</h3>
      <button type="submit" onClick={() => console.log(address)}>
        Add property
      </button>
    </div>
  );
};

const AddPropertyForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "address":
      return <Address {...props} />;
    case "propertyType":
      return <PropertyType {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default AddPropertyForm;
