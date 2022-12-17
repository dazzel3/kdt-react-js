import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding: 8px 6px;
  border-radius: 4px;
  border: none;
  outline: none;
  color: white;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #222222;
  }

  &:active {
    background-color: #333333;
  }

  &:disabled {
    background-color: #888888;
  }
`;

export default Button;
