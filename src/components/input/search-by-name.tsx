import React, {FC, useState} from "react";
import {InputProps} from "./input.types";
import "./style.sass";
import {CustomButton} from "../button/button";

export const CustomInput: FC<InputProps> = ({handleSeachMovie}) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="customInput"
      />
      <CustomButton value={"ПОИСК"} onClick={() => handleSeachMovie?.(value)} />
    </div>
  );
};
