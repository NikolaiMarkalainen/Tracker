import React from "react";

interface ButtonProperties extends React.ComponentPropsWithoutRef<"button"> {
  primaryButton?: boolean;
}

export const Button: React.FC<ButtonProperties> = ({
  primaryButton,
  className,
  ...props
}) => {
  const primary = "bg-primary p-2 rounded-lg hover:bg-primary_hover text-black";
  const secondary =
    "bg-secondary p-2 rounded-lg hover:bg-secondary_hover text-white";

  return (
    <button
      className={`${primaryButton ? primary : secondary} ${className}`}
      {...props}
    ></button>
  );
};
