import { styled } from "styled-components";

export const StyledRecordBase = styled.div`
  border: 24px solid var(--primary-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 1/1;

  .mark {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;

    filter: grayscale(100%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  h3 {
    color: #ffcc21;
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.125px;
    z-index: 1;
  }

  span {
    background-color: var(--primary-400);
    color: #fff;
    text-align: center;
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    width: 160px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
`;
