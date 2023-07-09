import React from "react";
import { StyledRecommendedBase } from "./style";

export interface RecommendedBaseProps {
  title: string;
  describe: string;
}

const RecommendedBase: React.FC<RecommendedBaseProps> = (props) => {
  const { title, describe } = props;
  return (
    <StyledRecommendedBase>
      <h3>{title}</h3>
      <div className="divider"></div>
      <p>{describe}</p>
    </StyledRecommendedBase>
  );
};

export default RecommendedBase;
