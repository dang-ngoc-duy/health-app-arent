import React from "react";
import noDataIcon from "src/assets/images/empty-box.png";
import { StyledEmptyData } from "./style";

interface EmptyDataProps {
  style?: React.CSSProperties;
}

const EmptyData: React.FC<EmptyDataProps> = (props) => {
  const { style } = props;
  return (
    <StyledEmptyData style={style}>
      <img
        src={noDataIcon}
        alt="no_data"
        style={{ filter: "grayscale(100%)" }}
      ></img>
      <p>No Data</p>
    </StyledEmptyData>
  );
};

export default EmptyData;
