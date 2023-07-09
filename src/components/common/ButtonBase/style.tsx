import { styled } from "styled-components";

export const StyledButtonHexagon = styled.button`
  width: 7.25rem;
  height: 8.375rem;
  background: var(--primary-300-400);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: none;
  outline: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  & img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const StyledButtonBase = styled.button`
  height: 3.5rem;
  width: 18.5rem;
  background: var(--primary-300-400);

  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 1rem;

  color: #fff;
  text-align: center;
  font-family: Hiragino Kaku Gothic Pro;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.625rem;
`;
