import React from 'react';

// 仮
export interface TopTableProps {
  memo: string;
  date: string;
  button: string;
}

export const TopTable: React.FC<TopTableProps> = (props) => {
  const { memo, date, button } = props;
  return (
    <table>
      <tr>
        <th>メモ内容</th>
        <th>登録日</th>
        <th>更新</th>
      </tr>
      <tr>
        <td>{memo}</td>
        <td>{date}</td>
        <td>{button}</td>
      </tr>
    </table>
  );
};
