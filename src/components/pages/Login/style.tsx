import styled from "styled-components";

export const StyledLogin = styled.div`
  &.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    background-color: var(--dark-600);
  }

  input[type="text"],
  input[type="password"] {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  input[type="submit"] {
    margin-top: 10px;
    cursor: pointer;
    font-size: 15px;
    background: var(--primary-300-400);
    border: 1px solid var(--primary-300-400);
    color: #fff;
    padding: 10px 20px;
    border-radius: 0.5rem;
  }

  input[type="submit"]:hover {
    background: var(--primary-300);
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .login-form {
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    width: 24rem;
  }

  .list-container {
    display: flex;
  }

  .error {
    color: red;
    font-size: 12px;
  }

  .title {
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px;
  }
`;
