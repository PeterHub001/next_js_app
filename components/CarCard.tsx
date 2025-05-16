"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@types";
import { calculateCarRent, generateCarImageUrl } from "@utils";
import shared from "./shared";
import CarSpecs from "./shared";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";




interface CarCardProps {
    car: CarProps
}
const CarCard = ({ car }: CarCardProps ) => {
  let { city_mpg, year, make, model, transmission, drive  } = car
  const carRent = calculateCarRent(city_mpg, year)
  console.log("city_mpg:", city_mpg, "year:", year);
const [isOpen, setIsOpen] = useState(false);
  
    return (
    <div className="card-card group bg-slate-200 rounded-t-xl p-5">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold"> 
                $
            </span>
            {carRent}
            <span className="self-end text-[14px] font-semibold">
                /day
            </span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src={generateCarImageUrl(car)} alt="car image" fill priority className="object-contain"/>
        </div>
        <div className="relative flex w-full mt-2">
        <CarSpecs transmission={transmission} drive={drive} city_mpg={city_mpg} />
        <div className="car-card__btn-container">
            <CustomButton 
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
             />
        </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard