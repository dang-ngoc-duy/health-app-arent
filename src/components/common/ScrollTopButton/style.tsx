import styled from "styled-components";
import scrollTopButton from "src/assets/icons/component_scroll.svg";

export const StyledScrollTopButton = styled.div`
  display: block;
  cursor: pointer;
  background: url("${scrollTopButton}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 0;
  border-radius: 100%;
  position: fixed;
  bottom: 140px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;

  &:hover {
    cursor: pointer;
    background-color: #333;
  }
  &:active {
    background-color: #555;
  }
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
