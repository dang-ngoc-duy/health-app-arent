import styled from "styled-components";

export const StyledRecommended = styled.div`
  margin-inline: clamp(0.5rem, 10%, 10rem);
  display: grid;
  grid-template-columns: 100%;
  gap: 3.5rem;
  overflow: hidden;

  .recommend-filters {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 2.5rem;
    justify-content: space-between;
    overflow-x: auto;
    cursor: pointer;
  }

  .item-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14.625rem, 0.25fr));
    grid-auto-rows: auto;
    grid-gap: 0.5rem;
    justify-content: center;
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    margin-bottom: 4rem;
  }
`;
