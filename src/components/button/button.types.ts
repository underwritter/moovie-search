import { BaseSyntheticEvent } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
    value: string;
    onClick?: (e: BaseSyntheticEvent) => void;
    type?: ButtonType;
}