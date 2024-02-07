import React from 'react';

// export interface TopTableProps {
//   memo: string;
//   date: string;
//   button: string;
// }
export interface TableListDetails {
  memo: string;
  date: string;
  button: string[];
}
export interface TableList {
  tableList: TableListDetails[];
}

export const TopTable: React.FC<TableList> = (props) => {
  const { tableList } = props;
  return (
    <table>
      <tr>
        <th>メモ内容</th>
        <th>登録日</th>
        <th>更新</th>
      </tr>
      {tableList.map((item, index)=>(
        <tr>
          <td>{item.memo}</td>
          <td>{item.date}</td>
          <td>{item.button}</td>
        </tr>
      ))}
    </table>
  );
};
