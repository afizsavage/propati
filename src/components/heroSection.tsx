import { CgSearch } from 'react-icons/cg';
import { CustomSelect } from './utils';

const HeroSection = () => {
  const priceRanges = [
    '$0 - $1,000',
    '$1,000+ - $2,000',
    '2,000+ - $3,000',
    '3,000+ - $4,000',
    '4,000+ - $5,000+',
  ];

  return (
    <section className="md:h-200 gradient flex flex-col items-center justify-center w-full ">
      <h1 className="text-6xl text-white font-Noto">
        Finding a home should be easy.
      </h1>
      <div className="my-4">
        <div className="bg-white flex overflow-visible items-center h-20 rounded-full">
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
              className="focus:outline-none bg-transparent text-gray-800 font-bold active:outline-none"
            />
          </div>
          <div className="relative h-full flex flex-col justify-center w-64 py-0 px-7 hover:bg-gray-200 rounded-full">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-400"
            >
              Price Range
            </label>
            <CustomSelect
              options={priceRanges}
              selectStyle="static inline-block h-auto w-full text-base text-gray-800 font-bold"
              optionsStyle="absolute bg-white h-cus w-full z-20 "
              setValue={true}
            />
          </div>
          <div className="h-full w-48 px-7 py-0 flex flex-col hover:bg-gray-200 justify-center rounded-full">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-400"
            >
              Listing Type
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="focus:outline-none bg-transparent text-gray-800 font-bold capitalize active:outline-none"
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
