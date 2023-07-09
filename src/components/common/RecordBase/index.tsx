import React from "react";
import { StyledRecordBase } from "./style";

export interface RecordBaseProps {
  imageLink: string;
  title: string;
  describe: string;
}

const RecordBase: React.FC<RecordBaseProps> = (props) => {
  const { imageLink, title, describe } = props;
  return (
    <StyledRecordBase>
      <h3>{title}</h3>
      <span>{describe}</span>
      <div
        className="mark"
        style={{
          backgroundImage: `url(${imageLink})`,
        }}
      ></div>
    </StyledRecordBase>
  );
};

export default RecordBase;
