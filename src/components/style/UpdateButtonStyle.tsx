import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: inline;
  margin: 15px;
`;

// 新規ボタンのスタイル。
export const NewButton = styled.button`
  width: 55px;
  height: 40px;
  color: white;
  margin: 15px 0 15px 0;
  background: #4169e1;
  background: linear-gradient(to bottom, #4169e1 0%, #0000ff 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #4169e1 0%, #0000ff 100%);
  }
`;

// 変更ボタンのスタイル。
export const ModifyButton = styled.button`
  width: 55px;
  height: 40px;
  background: #f1e767;
  background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #f1e767 0%, #feb645 100%);
  }
`;

// 削除ボタンのスタイル。
export const DeleteButton = styled.button`
  width: 55px;
  height: 40px;
  color: white;
  background: #ff6347;
  background: linear-gradient(to bottom, #ff6347 0%, #ff0000 100%);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #ff6347 0%, #ff0000 100%);
  }
`;
