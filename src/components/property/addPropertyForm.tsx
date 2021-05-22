import React from "react";
import { useStep } from "react-hooks-helper";
import { useForm } from "react-hook-form";
import { CUser, InProps } from "../../interfaces/";

import { InputField } from "../auth/authform";

type StepsObject = {
  id: any;
};

const steps: Array<StepsObject> = [
  { id: "names" },
  { id: "address" },
  { id: "submit" },
];

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
};

const Lastname = ({ navigation }) => {
  const { previous, next } = navigation;
  const { register, errors, handleSubmit } = useForm<CUser>({
    mode: "all",
  });

  return (
    <div className="">
      <span>step 2</span>
      <InputField
        name={"lastName"}
        type={"text"}
        placeholder={"Last Name "}
        register={register(registerOptions.lastName)}
        label={errors.lastName ? errors.lastName.message : "Last Name"}
        errors={errors.lastName}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

const registerOptions = {
  firstName: {
    required: "Enter First Name",
    minLength: {
      value: 2,
      message: "First Name must have at least 2 characters",
    },
  },
  lastName: {
    required: "Enter Last Name",
    minLength: {
      value: 2,
      message: "Last Name must have at least 2 characters",
    },
  },
  email: {
    required: "Enter Email",
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid Email address",
    },
  },
  password: {
    required: "Enter Password ",
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters",
    },
  },
};

const Names = ({ navigation }) => {
  const { previous, next } = navigation;
  const { register, errors, handleSubmit } = useForm<CUser>({
    mode: "all",
  });

  return (
    <div className="">
      <span>step 1</span>
      <InputField
        name={"firstName"}
        type={"text"}
        placeholder={"First Name "}
        register={register(registerOptions.firstName)}
        label={errors.firstName ? errors.firstName.message : "First Name"}
        errors={errors.firstName}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Thank you for submitting. We will b</h3>
      <button type="submit">Add property</button>
    </div>
  );
};

const AddForm = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { navigation };

  switch (id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Lastname {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

const AddPropertyForm = (params) => {
  const { register, errors, handleSubmit } = useForm<CUser>({
    mode: "all",
  });
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(() => console.log(registerOptions.firstName))}
      >
        <AddForm />
      </form>
    </div>
  );
};

export default AddPropertyForm;
