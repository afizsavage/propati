import React from "react";
import Image from "next/image";

function HeroImage() {
  return (
    <>
      {" "}
      <div className="relative top-0 w-full">
        <div className=" h-40 sm:h-32">
          <Image src="/4391857.jpg" alt="Picture of the author" layout="fill" />
        </div>
      </div>
    </>
  );
}

export default HeroImage;
