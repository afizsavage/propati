import { CgSearch } from 'react-icons/cg';
import { CustomSelect } from './utils';

const HeroSection = () => {
  const priceRanges = [
    '$0 - $4,000',
    '$4,000+ - $8,000',
    '8,000+ - $12,000',
    '12,000+ - $16,000',
    '160,000+ - $200,000+',
  ];

  const listingType = ['Rent', 'Buy', 'Lease'];

  return (
    <section className="h-96 md:h-200 gradient flex flex-col items-center justify-center w-full ">
      <h1 className="text-xl font-medium md:text-6xl text-white font-Noto">
        Finding a home should be easy.
      </h1>
      <div className="my-4">
        <div className="w-full md:w-auto overflow-hidden bg-white flex md:overflow-visible items-center h-16 md:h-20 rounded-full">
          <div className="h-full w-72 px-7 py-0 flex flex-col hover:bg-gray-200 justify-center rounded-full">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-400"
            >
              City/Address
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Where do you have in mind?"
              className="focus:outline-none bg-transparent text-gray-700 font-bold active:outline-none"
            />
          </div>
          <div className="hidden relative h-full md:flex flex-col justify-center w-60 py-0 px-7 hover:bg-gray-200 rounded-full">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-400"
            >
              Price Range
            </label>
            <CustomSelect
              options={priceRanges}
              selectStyle="static inline-block h-auto w-full text-base text-gray-700 font-bold"
              optionsStyle="absolute bg-white h-cus w-full z-20 "
              setValue={true}
            />
          </div>
          <div className="w-30 relative h-full flex flex-col justify-center md:w-60 py-0 px-7 hover:bg-gray-200 rounded-full">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-400"
            >
              List Type
            </label>
            <CustomSelect
              options={listingType}
              selectStyle="static inline-block h-auto w-full text-base text-gray-700 font-bold"
              optionsStyle="absolute bg-white h-cus w-full z-20 "
              setValue={true}
            />
          </div>
          <button className="h-10 w-10 text-2xl text-white flex justify-center items-center rounded-full bg-sprite mx-4">
            <CgSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
