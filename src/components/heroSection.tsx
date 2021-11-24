const HeroSection = () => {
  return (
    <section className="md:h-200 gradient flex flex-col items-center justify-center w-full ">
      <h1 className="text-6xl text-white font-Noto">
        Finding a home should be easy.
      </h1>
      <div className="my-4">
        <div className="bg-white flex overflow-hidden rounded-full h-20">
          <div className="h-full w-64 px-7 py-0 flex flex-col hover:bg-gray-200 justify-center">
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
              className="focus:outline-none bg-transparent text-gray-800 font-bold capitalize active:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
