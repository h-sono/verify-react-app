import styled from 'styled-components';

// 確認画面のタイトルスタイル。
export const ConfirmTitle = styled.div`
  font-size: 20px;
`;

// 戻るボタンのスタイル。
export const BackButton = styled.button`
  width: 55px;
  height: 40px;
  margin: 0 30px 0 30px;
  background: #fffacd;
  background: linear-gradient(to bottom, #fffacd 0%, #f5deb3 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #fffacd 0%, #f5deb3 100%);
  }
`;

// 登録ボタンのスタイル。
export const ResisterButton = styled.button`
  width: 55px;
  height: 40px;
  color: #ffffff;
  margin: 0 30px 0 30px;
  background: #ff4500;
  background: linear-gradient(to bottom, #ff4500 0%, #dc143c 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #ff4500 0%, #dc143c 100%);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
