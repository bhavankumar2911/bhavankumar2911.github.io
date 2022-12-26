import Image from "next/image";
import React from "react";
import BhavanPhoto from "../public/bhavan.jpg";

const Photo = () => {
  return (
    <div className="flex place-content-center mb-10 md:m-14 md:ml-0">
      <div className="rounded-full overflow-hidden h-[230px] w-[230px] md:h-[250px] md:w-[250px]">
        <span className="scale-125 block">
          <Image src={BhavanPhoto} alt="bhavan kumar photo" />
        </span>
      </div>
    </div>
  );
};

export default Photo;
