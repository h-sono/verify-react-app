import React from 'react';
import { UpdateButton } from '../atoms/UpdateButton.tsx';
import { INPUT } from '../const/RoutingPath.tsx';
import { New } from '../const/RegistrationType.tsx';
import { GetTodoListResProps } from '../callApi/GetTodoList.tsx';
export interface TableList {
  todoList: GetTodoListResProps;
}

// 一覧画面のビューコンポーネント
export const TopPageView: React.FC<TableList> = props => {
  const { todoList } = props;
  return (
    <div>
      {/* 新規ボタン */}
      <UpdateButton pagePath={INPUT} applType={New} />
      <table>
        <tr>
          <th>Todo</th>
          <th>登録日</th>
          <th>更新</th>
        </tr>
        {todoList.todo_list.map((item, index) => (
          <tr key={index}>
            <td>{item.todo}</td>
            <td>{item.update_date_time}</td>
            {item.appltype.map((buttonItem, buttonItemIndex) => (
              <td>
                <UpdateButton
                  todo_id={item.id}
                  todo={item.todo}
                  date={item.update_date_time}
                  pagePath={INPUT}
                  applType={buttonItem}
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
