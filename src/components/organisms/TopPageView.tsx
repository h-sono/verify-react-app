import React from 'react';
import { UpdateButton } from '../atoms/UpdateButton';
import { INPUT } from '../const/RoutingPath';
import { New } from '../const/RegistrationType';
import { GetTodoListResProps } from '../callApi/GetTodoList';
import { Table, TodoTh, DateTh, ButtonTh, TodoTd, DateTd, ButtonTd } from '../style/TopPageStyle';

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
      <Table>
        <tr>
          <TodoTh>Todo</TodoTh>
          <DateTh>登録日時</DateTh>
          <ButtonTh>更新</ButtonTh>
        </tr>
        {todoList.todo_list.map((item, index) => (
          <tr key={index}>
            <TodoTd>{item.todo}</TodoTd>
            <DateTd>{item.update_date_time}</DateTd>
            <ButtonTd>
              {item.appltype.map((buttonItem, _) => (
                <UpdateButton
                  todo_id={item.id}
                  todo={item.todo}
                  date={item.update_date_time}
                  pagePath={INPUT}
                  applType={buttonItem}
                />
              ))}
            </ButtonTd>
          </tr>
        ))}
      </Table>
    </div>
  );
};
