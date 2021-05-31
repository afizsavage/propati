import React from "react";
import { useStep, useForm } from "react-hooks-helper";
// import { useForm } from "react-hook-form";
import { AddPropertyProps, InProps } from "../../interfaces/";

import { InputField } from "../auth/authform";
import { SubmitBtn } from "../auth";

type StepsObject = {
  id: any;
};

const steps: Array<StepsObject> = [
  { id: "address" },
  { id: "propertyType" },
  { id: "submit" },
];

const defaultData = {
  address: "200 South Main St",
  propertyType: "Anytown",
};

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

const Address = ({ navigation, setForm, formData }) => {
  const { address } = formData;

  const { previous, next } = navigation;

  return (
    <div className="pl-9 pr-11">
      <h3 className="font-Lato text-3xl text-gray-600 mb-5">
        Hi! Let's get started creating your property.
      </h3>
      <span className="text-sm font-semibold text-gray-500">STEP 1</span>
      {/* <ItemForm
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        children
      /> */}
      <InputField
        name="address"
        placeholder="Enter Address"
        type="text"
        value={address}
        onChange={setForm}
      />
      <div>
        <button
          className="bg-teal-600 rounded px-3 py-2 text-sm font-bold text-white mt-3"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const PropertyType = ({ setForm, formData, navigation }) => {
  const { propertyType } = formData;
  const { previous, next } = navigation;

  return (
    <div className="">
      <span>step 2</span>

      <ItemForm
        label="PropertyType"
        name="propertyType"
        value={propertyType}
        onChange={setForm}
        children
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
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
