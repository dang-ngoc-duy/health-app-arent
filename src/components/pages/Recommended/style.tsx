import styled from "styled-components";

export const StyledRecommended = styled.div`
  margin: 0 10rem;
  display: grid;
  grid-template-columns: 100%;
  gap: 3.5rem;
  overflow: hidden;

  .recommend-filters {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 13.5rem 13.5rem 13.5rem 13.5rem;
    grid-auto-rows: 9rem;
    grid-gap: 2.5rem;
    justify-content: space-between;
    overflow-x: auto;
  }

  .item-list {
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14.625rem, 1fr));
    grid-auto-rows: 9.02938rem;
    grid-gap: 0.5rem;
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    margin-bottom: 4rem;
  }
`;
