import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   containerStyles?: string;
   btnTypes?: "button" | "submit" ;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
}