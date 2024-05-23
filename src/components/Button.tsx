import React from "react";

interface Props {
  children: React.ReactNode;
  // colour?:  string; // add ? to make it optional

  // to make it limited to certain values,
  // add the values and use the union | operator if you want to allow multiple values
  colour?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
