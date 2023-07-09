import styled from "styled-components";

export const StyledAchievements = styled.div`
  margin-inline: clamp(0.5rem, 10%, 10rem);
  display: grid;
  grid-template-columns: 100%;
  gap: 3.5rem;
  overflow: hidden;

  .features {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 3rem;
    justify-content: space-between;
    overflow-x: auto;
  }

  .body-record {
    width: 100%;
    height: 19rem;
    background: var(--dark-600);
    margin-bottom: 3.5rem;
  }

  .my-exercise {
    width: 100%;
    height: 19rem;
    background: var(--dark-600);
    overflow: hidden;
    display: flex;
    flex-direction: column;

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
      background: var(--dark-600);
      flex-shrink: 0;
      flex-grow: 0;

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

    .exercise-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 0.5rem;
      grid-gap: 4.5rem;
      padding-right: 2.5rem;
      overflow: auto;
      flex: 1;

      li {
        height: fit-content;
        color: #fff;
        border-bottom: 1px solid var(--gray-400);
        padding: 0.25rem 1rem;

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          span:first-of-type {
            color: #fff;
            font-family: Hiragino Kaku Gothic Pro;
            font-size: 0.9375rem;
            font-style: normal;
            font-weight: 300;
            line-height: 1.375rem;
            letter-spacing: 0.00469rem;
          }
          span:last-of-type {
            color: #ffcc21;
            text-align: right;
            font-family: Inter;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.375rem;
            letter-spacing: 0.00563rem;
          }
        }
        & > span {
          color: #ffcc21;
          font-family: Inter;
          font-size: 0.9375rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.125rem;
          letter-spacing: 0.00469rem;
        }
      }
    }
  }
  .my-diary {
    .diary-list {
      overflow-y: auto;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14.625rem, 0.25fr));
      grid-auto-rows: auto;
      grid-gap: 0.5rem;
      justify-content: center;
    }

    span {
      display: block;
      color: var(--dark-500-text);
      font-family: Inter;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6875rem;
      letter-spacing: 0.00688rem;
    }
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 768px) {
    .my-exercise {
      .exercise-list {
        grid-template-columns: auto;
      }
    }
  }
`;
