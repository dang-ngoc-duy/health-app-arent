import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import appLogo from "src/assets/icons/app_logo.svg";
import iconMemo from "src/assets/icons/icon_memo.svg";
import iconChallenge from "src/assets/icons/icon_challenge.svg";
import iconInfo from "src/assets/icons/icon_info.svg";

import { StyledHeader } from "./style";

const Header: React.FC = () => {
  const [menuToggleClass, setMenuToggleClass] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuToggleClass((prev) => (prev === "open" ? "" : "open"));
  };

  return (
    <StyledHeader>
      <div onClick={() => navigate("/")} className="app-logo">
        <img src={appLogo} alt="healthy_logo"></img>
      </div>
      <div>
        <div className="navi-memo-container">
          <div onClick={() => navigate("/achievements")} className="navi-memo">
            <div>
              <img src={iconMemo} alt="icon_memo"></img>
            </div>
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
        <div className="menu-list">
          <div onClick={toggleMenu} className={`btn-menu ${menuToggleClass}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`toggle-menu ${menuToggleClass}`}>
            <li onClick={() => navigate("/achievements")}>自分の記録</li>
            <li>体重グラフ</li>
            <li>目標</li>
            <li>選択中のコース</li>
            <li>コラム一覧</li>
            <li>設定</li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
