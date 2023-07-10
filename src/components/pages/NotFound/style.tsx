import styled from "styled-components";

export const StyledNotFound = styled.div`
  &#main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
    font-family: "Lato", sans-serif;
    color: #888;
    transition: all 0.6s;
  }

  .fof {
    display: flex;
    vertical-align: middle;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
