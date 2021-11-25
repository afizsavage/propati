import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { SubmitBtn } from '../auth';
import { InputField } from '../auth/authform';
import { CustomSelect } from '../utils';

interface AddProperty {
  name: string;
}

const CusomizedSelect = (params) => {
  const options = ['Apartment', 'Duplex', 'Detached', 'Bungalow', 'Room'];

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
  const path = '/add-property';

  const { register, errors, handleSubmit } = useForm<AddProperty>({
    mode: 'all',
  });

  return (
    <div className="px-5 pb-12">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <InputField
              name={'name'}
              placeholder="Property Name"
              type="text"
              label={'Property Name'}
            />
            <InputField
              name={'address'}
              placeholder={'Address'}
              type="text"
              label={'Address'}
            />
            <InputField
              name={'unit'}
              placeholder={'Unit'}
              type="text"
              label={'Unit# (optional)'}
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

export default AddForm;
