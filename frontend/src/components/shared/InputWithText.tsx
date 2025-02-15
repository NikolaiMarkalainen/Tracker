import React from "react";

interface IInputWithText extends React.ComponentPropsWithoutRef<"input"> {
  text: string;
}

export const InputWithText: React.FC<IInputWithText> = ({
  text,
  className,
  ...props
}) => {
  return (
    <div>
      <input className={`${className}`} {...props}>
        {text}
      </input>
    </div>
  );
};
