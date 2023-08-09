import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
};

export default Modal;
