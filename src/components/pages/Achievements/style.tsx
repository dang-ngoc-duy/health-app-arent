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
  }

  .my-exercise {
    width: 100%;
    height: 19rem;
    background: var(--dark-600);
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
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    margin-bottom: 4rem;
  }
`;
