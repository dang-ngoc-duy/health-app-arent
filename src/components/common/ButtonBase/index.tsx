import React from "react";
import { StyledButtonHexagon, StyledButtonBase } from "./style";

export interface ButtonBaseProps {
  iconLink: string;
  title: string;
  type?: "normal" | "hexagon";
}

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  const { iconLink, title, type = "normal" } = props;

  return type === "hexagon" ? (
    <StyledButtonHexagon>
      <img src={iconLink} alt="icon_knife" />
      {title}
    </StyledButtonHexagon>
  ) : (
    <StyledButtonBase>{title}</StyledButtonBase>
  );
};

export default ButtonBase;
