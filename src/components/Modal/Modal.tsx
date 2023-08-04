import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
