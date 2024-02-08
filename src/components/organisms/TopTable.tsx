import React from "react";
import { Button } from "../atoms/button.tsx";
import { INPUT } from "../const/routingPath.tsx";

export interface TableListDetails {
  memo: string;
  date: string;
  button: string[];
}
export interface TableList {
  tableList: TableListDetails[];
}

// 一覧画面に戻ってきたときにセッションストレージをリセットする

export const TopTable: React.FC<TableList> = (props) => {
  const { tableList } = props;
  return (
    <table>
      <tr>
        <th>メモ内容</th>
        <th>登録日</th>
        <th>更新</th>
      </tr>
      {tableList.map((item, index) => (
        <tr key={index}>
          <td>{item.memo}</td>
          <td>{item.date}</td>
          {item.button.map((buttonItem, buttonItemIndex) => (
            <td>
              <Button memo={item.memo} date={item.date} pagePath={INPUT} />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
