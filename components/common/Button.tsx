import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};

export default Button;
