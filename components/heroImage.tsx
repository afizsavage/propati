import Image from "next/image";

const HeroImage = (params) => {
  return (
    <div className="w-full top-0 h-auto relative ">
      <div className="absolute w-full h-52">
        <Image src="/4391857.jpg" alt="Picture of the author" layout="fill" />
      </div>
    </div>
  );
};

export default HeroImage;
