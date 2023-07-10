import React from "react";
import { StyledRecommendedBase } from "./style";

export interface RecommendedBaseProps {
  id?: string;
  title: string;
  describe: string;
  onClick?: (id?: string) => void;
}

const RecommendedBase: React.FC<RecommendedBaseProps> = (props) => {
  const { id, title, describe, onClick } = props;
  return (
    <StyledRecommendedBase onClick={() => onClick && onClick(id)}>
      <h3>{title}</h3>
      <div className="divider"></div>
      <p>{describe}</p>
    </StyledRecommendedBase>
  );
};

export default RecommendedBase;
