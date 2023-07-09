import styled from "styled-components";

export const StyledLineChartBase = styled.div`
  height: 100%;
  position: relative;

  .line-chart-header {
    display: flex;
    padding: 1rem 1.5rem;
    padding-bottom: 0;
    flex-direction: row;
    color: #fff;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.00938rem;
    align-items: center;

    & > div:nth-child(1) {
      width: 100px;
    }
    & > div:nth-child(2) {
      color: #fff;
      font-family: Inter;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6875rem;
      letter-spacing: 0.00688rem;
    }
  }

  .filter-block {
    display: flex;
    position: absolute;
    bottom: -30px;
    left: 35px;
    gap: 1rem;

    button {
      width: 3.5rem;
      height: 1.5rem;
      border-radius: 0.6875rem;
      background: #fff;
      border: 0;
      color: var(--primary-300);
      text-align: center;
      font-family: Hiragino Kaku Gothic Pro;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.375rem;
      letter-spacing: 0.00469rem;

      &.active {
        color: #fff;
        background: var(--primary-300);
      }
    }
  }
`;
