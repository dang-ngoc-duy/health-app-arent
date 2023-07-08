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

    color: #fff;
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4375rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .btn-menu {
    width: 2rem;
    height: 2rem;
  }
`;
