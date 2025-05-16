import Image from "next/image";
import React from "react";

interface CarSpecsProps {
  transmission: string;
  drive: string;
  city_mpg: number;
}

const CarSpecs: React.FC<CarSpecsProps> = ({ transmission, drive, city_mpg }) => {
    if (typeof city_mpg !== "number") {
        city_mpg = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
      }
  return (
    <div className="flex group-hover:invisible w-full justify-between text-gray">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="/steering-wheel.svg" alt="steering wheel" height={20} width={20} />
        <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="/tire.svg" alt="tire" height={20} width={20} />
        <p className="text-[14px]">{drive.toUpperCase()}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="/gas.svg" alt="gas" height={20} width={20} />
        <p className="text-[14px]">{city_mpg} MPG</p>
      </div>
    </div>
  );
};

export default CarSpecs;
