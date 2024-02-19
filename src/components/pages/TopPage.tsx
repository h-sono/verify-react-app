import React from 'react';
import { TopPageView } from '../organisms/TopPageView.tsx';
import { SessionStorageAllClear } from '../utils/SessionStorageUtils.tsx';
import { getTodoList } from '../callApi/GetTodoList.tsx';
import { GetTodoListResProps } from '../callApi/GetTodoList.tsx';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  const [todoList, setTodoList] = React.useState<GetTodoListResProps[]>([
    {
      id: 0,
      todo: '',
      appltype: [''],
      del_flg: false,
      update_date_time: ''
    }
  ]);

  // TODO:user_idを渡す。コンテキストで保管。
  React.useEffect(() => {
    getTodoList(1).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。
        console.log('一覧取得失敗。');
      } else {
        setTodoList(data);
      }
    });
  }, []);

  // セッションストレージをクリアする
  SessionStorageAllClear();
  return <TopPageView todoList={todoList} />;
};
