import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  key,
  disabled,
}) => {
  const buttonClasses = className || "";

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      key={key}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
