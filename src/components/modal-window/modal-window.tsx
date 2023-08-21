import React, { FC } from 'react';
import './style.sass'
import { ModalWindowProps } from './modal-window.types';

export const ModalWindow:FC<ModalWindowProps> = ({active, onClose, children}) => {
if(!active) {
  return null
};

  return (
    <div className="modal" onClick={onClose}>
      <div 
      className="modal__content" 
      onClick={(e)=>{e.stopPropagation()}}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

