import styled from 'styled-components';

// ログアウトボタンのスタイル。
export const LogoutButtonDisplay = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background: #008000;
  background: linear-gradient(to bottom, #008000 0%, #006400 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #008000 0%, #006400 100%);
  }
`;
