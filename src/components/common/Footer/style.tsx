import styled from "styled-components";

export const StyledFooter = styled.div`
  height: 8rem;

  background: var(--dark-500-text);
  overflow: auto;
  padding-inline: clamp(0.5rem, 10%, 10rem);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.75rem;

  a {
    text-decoration: none;
    color: #fff;
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1rem;
    letter-spacing: 0.00206rem;
    flex: 0 0 auto;
  }
`;
