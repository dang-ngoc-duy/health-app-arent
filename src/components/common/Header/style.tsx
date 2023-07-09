import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;
  background: var(--dark-500-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  & > div:last-of-type {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .app-logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      height: 2.5rem;
    }
  }

  .navi-memo-container {
    width: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .navi-memo {
    width: 10rem;
    height: 3rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-seft: end;
    gap: 0.5rem;
    cursor: pointer;

    color: #fff;
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4375rem;

    &:hover {
      background-color: rgba(255, 150, 60, 0.15);
    }

    img {
      width: 2rem;
      height: 2rem;
      &:hover {
      }
    }
  }

  .menu-list {
    position: relative;
    .toggle-menu {
      display: none;
      position: absolute;
      top: 32px;
      right: 0;
      list-style: none;
      padding: 0;
      z-index: 1;

      &.open {
        display: block;
      }

      li {
        width: 17.5rem;
        height: 4.5rem;
        background: var(--gray-400);
        color: #fff;
        font-family: Hiragino Kaku Gothic Pro;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.625rem;
        padding: 1.4rem 2rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid rgb(255 255 255 / 50%);
      }
      li:last-of-type {
        border-bottom: none;
      }
      li:hover {
        background: #5e5e5e;
      }
    }
  }

  .btn-menu {
    display: flex;
    width: 2rem;
    height: 2rem;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    flex-direction: column;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 26px;
      background: var(--primary-400);
      opacity: 1;
      left: 0.188rem;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
  }
  .btn-menu span:nth-child(1) {
    top: 0.4rem;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .btn-menu span:nth-child(2) {
    top: 0.9rem;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .btn-menu span:nth-child(3) {
    top: 1.4rem;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .btn-menu.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    top: 0.375rem;
    left: 0.46rem;
  }

  .btn-menu.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .btn-menu.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 1.5rem;
    left: 0.46rem;
  }
`;
