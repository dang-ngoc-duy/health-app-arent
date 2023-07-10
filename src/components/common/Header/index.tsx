import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import appLogo from "src/assets/icons/app_logo.svg";
import iconChallenge from "src/assets/icons/icon_challenge.svg";
import iconInfo from "src/assets/icons/icon_info.svg";
import iconMemo from "src/assets/icons/icon_memo.svg";

import { StyledHeader } from "./style";

const Header: React.FC = () => {
  const [menuToggleClass, setMenuToggleClass] = useState("");
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  const toggleMenu = () => {
    setMenuToggleClass((prev) => (prev === "open" ? "" : "open"));
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuToggleClass("");
    }
  };

  const handleNavigate = (link: string) => {
    if (link) {
      navigate(link);
    }
    setMenuToggleClass("");
  };

  const handleLogout = () => {
    localStorage.removeItem("USER_PROFILE");
    navigate("/login");
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
            <div>
              <img src={iconChallenge} alt="icon_challenge"></img>
            </div>
            チャレンジ
          </div>
          <div className="navi-memo">
            <div>
              <img src={iconInfo} alt="icon_info"></img>
            </div>
            お知らせ
          </div>
        </div>
        <div ref={menuRef} className="menu-list">
          <div onClick={toggleMenu} className={`btn-menu ${menuToggleClass}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`toggle-menu ${menuToggleClass}`}>
            <li onClick={() => handleNavigate("/achievements")}>自分の記録</li>
            <li>体重グラフ</li>
            <li>目標</li>
            <li>選択中のコース</li>
            <li onClick={() => handleNavigate("/recommended")}>コラム一覧</li>
            <li>設定</li>
            <li onClick={handleLogout}>ログアウト</li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
