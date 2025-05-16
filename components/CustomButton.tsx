"use client";
import { Children } from "@node_modules/@types/react";
import { CustomButtonProps } from "@types";
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick, btnTypes, rightIcon, textStyles }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnTypes || "button"}
        className={`custom-btn ${containerStyles} ${textStyles} ${rightIcon}`}
        
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
             />

          </div>
        )}
    </button>
  )
}

export default CustomButton