import { styled } from "styled-components";
import PIE_CHART_BG from "src/assets/images/d01.jpg";

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 19.75rem auto;
  align-items: center;

  .pie-chart {
    height: 100%;
    background-image: url(${PIE_CHART_BG});
    background-size: cover;
    background-position: center;
  }

  .container {
    margin-inline: clamp(0.5rem, 10%, 10rem);
    height: 100%;
    display: flex;
    grid-column-start: 1;
    grid-column-end: 3;
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    .filters {
      display: flex;
      align-items: center;
      gap: 4rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      overflow: auto;
      margin-inline: auto;
      width: auto;
      max-width: 100%;
    }

    .item-list {
      overflow-y: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14.625rem, 1fr));
      grid-auto-rows: auto;
      grid-gap: 0.5rem;
      width: 100%;
    }

    .load-more {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.75rem;
      margin-bottom: 4rem;
    }
  }
`;
