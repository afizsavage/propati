import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { SubmitBtn } from "../../components/auth";
import { InputField } from "../../components/auth/authform";
import Layout from "../../components/layout";
import { CustomSelect, DropDown } from "../../components/utils";

const Header = (params) => {
  return (
    <div className="py-6 text-gray-700 text-center w-2/4 mx-auto">
      <h1 className="w-full block text-xl font-bold">Add Your Property</h1>
      <h3 className=" text-base text-gray-400 mt-2 font-medium">
        Rent your property to blah blah blah of the blah
      </h3>
    </div>
  );
};

const RentColumn = ({ header, paragraph }) => {
  return (
    <div className="mb-11">
      <h3 className="capitalize w-full block text-lg font-bold mx-auto mb-2">
        {header}
      </h3>
      <p>{paragraph}</p>
    </div>
  );
};

const ColumnContainer = ({ children }) => {
  return (
    <div className="px-5 flex flex-col text-center text-gray-700">
      {children}
    </div>
  );
};

interface AddProperty {
  name: string;
}

const CusomizedSelect = (params) => {
  const options = ["Apartment", "Duplex", "Detached", "Bungalow", "Room"];

  return (
    <div className="input-container">
      <CustomSelect
        selectStyle="border-b focus:border-teal-700 border-opacity-50 border-gray-400 border-opacity-50 appearance-none transition-colors duration-200 ease-in"
        optionsStyle="rounded-sm absolute bg-white h-cus w-full transform scale-x-110 py-0 overflow-y-scroll"
        options={options}
      />
      <span className="drop-label">Type</span>
    </div>
  );
};

const AddForm = ({ loading, onSubmit }) => {
  const router = useRouter();
  const path = "/add-property";

  const { register, errors, handleSubmit } = useForm<AddProperty>({
    mode: "all",
  });

  return (
    <div className="px-5 pb-12">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <InputField
              name={"name"}
              placeholder="Property Name"
              type="text"
              label={"Property Name"}
            />
            <InputField
              name={"address"}
              placeholder={"Address"}
              type="text"
              label={"Address"}
            />
            <InputField
              name={"unit"}
              placeholder={"Unit"}
              type="text"
              label={"Unit# (optional)"}
            />
            <CusomizedSelect />
          </div>
          <div></div>
        </div>
        <div>
          <div className="mt-14">
            <SubmitBtn loading={false} page={path} style="rounded-lg" />
          </div>
        </div>
      </form>
    </div>
  );
};

const Property = () => {
  return (
    <Layout pageInfo={{ pageName: "add-property" }}>
      <div className="flex flex-col h-full overflow-y-hidden flex-grow w-full font-Lato">
        <Header />
        <AddForm loading={false} onSubmit={() => console.log("hi")} />
        <ColumnContainer>
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
        </ColumnContainer>
      </div>
    </Layout>
  );
};

export default Property;
