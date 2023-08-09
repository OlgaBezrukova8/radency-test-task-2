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
    <div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-10 rounded shadow-lg w-1/5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
