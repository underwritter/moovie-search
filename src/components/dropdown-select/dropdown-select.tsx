import React, {FC, useState} from "react";
import "./style.sass";

interface PropsDropdownSelect {
  handleSeachByYear: (arg: string) => void;
}

export const DropdownSelect: FC<PropsDropdownSelect> = ({
  handleSeachByYear,
}) => {
  const yearsArray = [];
  for (let a = 2030; a >= 1860; a--) {
    yearsArray.push(a);
  }
  const [inputValue, setInputValue] = useState("2023");
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const show = (item: number) => {
    setInputValue(String(item));
  };


  return (
    <div className="wrapperDropdown">
      <div
        onClick={toggleClass}
        className={isActive ? "dropdown active" : "dropdown"}
      >
        <input
          type="text"
          className={isActive ? "textBox textBoxActive" : "textBox"}
          value={inputValue}
          placeholder="по году"
        />
        <div className={isActive ? "option activeList" : "option"}>
          {yearsArray.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => show(item)}
                className="dropdown__item"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="dropdownOK"
        onClick={() => handleSeachByYear?.(inputValue)}
      >
        OK
      </button>
    </div>
  );
};
