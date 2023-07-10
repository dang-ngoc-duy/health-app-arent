import React from "react";
import noDataIcon from "src/assets/images/empty-box.png";
import { StyledEmptyData } from "./style";

const EmptyData: React.FC = () => {
  return (
    <StyledEmptyData>
      <img src={noDataIcon} alt="no_data"></img>
      <p>No Data</p>
    </StyledEmptyData>
  );
};

export default EmptyData;
