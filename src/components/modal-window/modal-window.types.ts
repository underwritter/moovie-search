import { ReactNode } from "react";

export interface ModalWindowProps {
    active: Boolean;
    onClose: VoidFunction;
    children: ReactNode;
}