import styled from 'styled-components';

// ログイン画面のdivスタイル。
export const LoginContainer = styled.div`
  background: #ffffff;
  max-width: 360px;
  margin: 100px auto auto auto;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

// ログイン画面のユーザー名、パスワードの入力ボックスのスタイル。
export const LoginInput = styled.input`
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

// ログインボタンのスタイル。
export const LoginButton = styled.button`
  background: #006400;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #4caf50;
  }
`;

export const LoginFailMsg = styled.div`
  color: #ff0000;
  text-align: center;
  margin-top: 10px;
`;
