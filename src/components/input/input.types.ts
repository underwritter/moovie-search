import {BaseSyntheticEvent} from "react";

type InputTypes = React.HTMLInputTypeAttribute | undefined;

export interface InputProps {
  onChange?: (e: BaseSyntheticEvent) => void;
  type?: InputTypes;
  handleSeachMovie: (arg: string) => void;
}
