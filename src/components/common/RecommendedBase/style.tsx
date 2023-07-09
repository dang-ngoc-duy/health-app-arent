import { styled } from "styled-components";

export const StyledRecommendedBase = styled.div`
  background-color: var(--dark-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: Hiragino Kaku Gothic Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  aspect-ratio: 13.5 / 9;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .divider {
    width: 56px;
    height: 0px;
    border: 0.5px solid #fff;
    margin: 0;
  }

  h3 {
    display: flex;
    color: var(--primary-300);
    text-align: center;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.11px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
