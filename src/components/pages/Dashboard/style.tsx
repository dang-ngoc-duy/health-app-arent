import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 19.75rem auto;
  align-items: center;

  .pie-chart {
    height: 100%;
  }
  .line-chart {
    height: 100%;
  }
  .container {
    margin: 0 10rem;
    height: 100%;
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    overflow: hidden;

    .item-list {
      overflow-y: auto;
    }
  }
`;
