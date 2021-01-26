const HeroSection = (params) => {
  return (
    <div className="h-96 bg-gray-50 grid w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 px-12">
        <div className="my-auto">
          <div className="mx-auto text-center md:text-left text-4xl md:text-6xl text-gray-800 font-extrabold">
            Find the right home at your own time
          </div>
        </div>
        <div className="bg-center h-80 md:h-auto order-first md:order-2 bg-hero-image bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default HeroSection;
