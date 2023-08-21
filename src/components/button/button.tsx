import { FC } from "react";
import { ButtonProps } from "./button.types";
import './style.sass'


export const CustomButton: FC<ButtonProps> = ({value, onClick, type}) => {
  return (
    <button type={type} className="customBtn" onClick={onClick}>
      {value}
    </button>
  );
};
