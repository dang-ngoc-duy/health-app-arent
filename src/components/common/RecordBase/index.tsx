import React from "react";
import { StyledRecordBase } from "./style";

export interface RecordBaseProps {
  id: string;
  imageLink: string;
  title: string;
  describe: string;
  onClick?: (id: string) => void;
}

const RecordBase: React.FC<RecordBaseProps> = (props) => {
  const { id, imageLink, title, describe, onClick } = props;
  return (
    <StyledRecordBase onClick={() => onClick && onClick(id)}>
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
