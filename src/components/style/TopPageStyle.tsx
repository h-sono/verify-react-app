import styled from 'styled-components';

// tableタグのスタイル。
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

// thタグ：「Todo」列のスタイル。
export const TodoTh = styled.th`
  text-align: center;
  color: white;
  background: linear-gradient(#829ebc, #225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.3) inset;
  width: 60%;
  padding: 10px 0;
`;

// thタグ：「登録日」列のスタイル。
export const DateTh = styled.th`
  text-align: center;
  color: white;
  background: linear-gradient(#829ebc, #225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.3) inset;
  width: 25%;
  padding: 10px 0;
`;

// thタグ：「更新」列のスタイル。
export const ButtonTh = styled.th`
  text-align: center;
  color: white;
  background: linear-gradient(#829ebc, #225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.3) inset;
  width: 15%;
  padding: 10px 0;
`;

// tdタグ：「Todo」列のスタイル。
export const TodoTd = styled.td`
  text-align: left;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top: none;
  box-shadow: 0px -3px 5px 1px #eee inset;
  width: 60%;
  padding: 10px 0;
`;

// tdタグ：「登録日」列のスタイル。
export const DateTd = styled.td`
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top: none;
  box-shadow: 0px -3px 5px 1px #eee inset;
  width: 25%;
  padding: 10px 0;
`;

// tdタグ：「更新」列のスタイル。
export const ButtonTd = styled.td`
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top: none;
  box-shadow: 0px -3px 5px 1px #eee inset;
  width: 15%;
  padding: 10px 0;
`;

export const BodyComment = styled.div`
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
`;
