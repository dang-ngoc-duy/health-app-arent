import React from "react";
import { StyledNotFound } from "./style";
import ButtonBase from "src/components/common/ButtonBase";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound id="main">
      <div className="fof">
        <h1>ページが見つかりません</h1>
        <ButtonBase
          onClick={() => navigate("/")}
          title={"家に帰れ"}
          type={"normal"}
        ></ButtonBase>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
