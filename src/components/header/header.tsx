import React, {BaseSyntheticEvent} from "react";
import {CustomButton} from "../button/button";
import "./style.sass";

interface HeaderProps {
  onClick: VoidFunction;
}

export const Header = ({onClick}: HeaderProps) => {
  return (
    <div onClick={onClick} className="header">
      <div className="_header">
        <div className="bacgroundLogo">
          <div className="logo"></div>
        </div>
        <div>
          <div className="nameSite">КИНОПАСС</div>
          <div className="slogan">Кино - для Вас</div>
        </div>
      </div>
    </div>
  );
};
