import React from 'react';
import { UpdateButton } from '../atoms/UpdateButton.tsx';
import { INPUT } from '../const/RoutingPath.tsx';
import { New } from '../const/RegistrationType.tsx';

export interface TableListDetails {
  todo: string;
  date: string;
  button: string[];
}
export interface TableList {
  tableList: TableListDetails[];
}

// 一覧画面のビューコンポーネント
export const TopPageView: React.FC<TableList> = props => {
  const { tableList } = props;
  return (
    <div>
      <UpdateButton pagePath={INPUT} applType={New} />
      <table>
        <tr>
          <th>Todo</th>
          <th>登録日</th>
          <th>更新</th>
        </tr>
        {tableList.map((item, index) => (
          <tr key={index}>
            <td>{item.todo}</td>
            <td>{item.date}</td>
            {item.button.map((buttonItem, buttonItemIndex) => (
              <td>
                <UpdateButton todo={item.todo} date={item.date} pagePath={INPUT} applType={buttonItem} />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
