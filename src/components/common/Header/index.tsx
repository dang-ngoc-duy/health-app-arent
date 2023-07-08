import React from "react";

import appLogo from "src/assets/icons/app_logo.svg";
import iconMemo from "src/assets/icons/icon_memo.svg";
import iconChallenge from "src/assets/icons/icon_challenge.svg";
import iconInfo from "src/assets/icons/icon_info.svg";
import iconMenu from "src/assets/icons/icon_menu.svg";
// import iconClose from "src/assets/icons/icon_close.svg";

import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="app-logo">
        <img src={appLogo} alt="healthy_logo"></img>
      </div>
      <div>
        <div className="navi-memo-container">
          <div className="navi-memo">
            <img src={iconMemo} alt="icon_memo"></img>
            自分の記録
          </div>
          <div className="navi-memo">
            <img src={iconChallenge} alt="icon_challenge"></img>
            チャレンジ
          </div>
          <div className="navi-memo">
            <img src={iconInfo} alt="icon_info"></img>
            お知らせ
          </div>
        </div>
        <img className="btn-menu" src={iconMenu} alt="icon_menu"></img>
        {/* <div>
        <img src={iconClose} alt="icon_close"></img>
      </div> */}
      </div>
    </StyledHeader>
  );
};

export default Header;
