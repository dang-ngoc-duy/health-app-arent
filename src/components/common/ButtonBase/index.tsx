import React from "react";
import { StyledButtonHexagon, StyledButtonBase } from "./style";

export interface ButtonBaseProps {
  iconLink?: string;
  title: string;
  type: "normal" | "hexagon";
  onClick?: () => void;
}

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  const { iconLink, title, type = "normal", onClick } = props;

  return type === "hexagon" ? (
    <StyledButtonHexagon onClick={onClick}>
      <img src={iconLink} alt="icon_knife" />
      {title}
    </StyledButtonHexagon>
  ) : (
    <StyledButtonBase onClick={onClick}>{title}</StyledButtonBase>
  );
};

export default ButtonBase;
