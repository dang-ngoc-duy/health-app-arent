import React from "react";
import { StyledButtonHexagon, StyledButtonBase } from "./style";

export interface ButtonBaseProps {
  id?: string;
  iconLink?: string;
  title: string;
  type: "normal" | "hexagon";
  onClick?: (id?: string) => void;
}

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  const { id, iconLink, title, type = "normal", onClick } = props;

  return type === "hexagon" ? (
    <StyledButtonHexagon onClick={() => onClick && onClick(id)}>
      <img src={iconLink} alt="icon_knife" />
      {title}
    </StyledButtonHexagon>
  ) : (
    <StyledButtonBase onClick={() => onClick && onClick()}>
      {title}
    </StyledButtonBase>
  );
};

export default ButtonBase;
