"use client";
import { Children } from "@node_modules/@types/react";
import { CustomButtonProps } from "@types";
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick, btnTypes }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnTypes || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton