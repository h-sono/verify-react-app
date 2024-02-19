import React, { useContext } from 'react';
import { TopPageView } from '../organisms/TopPageView.tsx';
import { SessionStorageAllClear } from '../utils/SessionStorageUtils.tsx';
import { getTodoList } from '../callApi/GetTodoList.tsx';
import { GetTodoListResProps } from '../callApi/GetTodoList.tsx';
import { UserInfoContext } from '../hook/CommonUseContext.tsx';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  // 他の画面からトップページに遷移してきたときにセッションストレージをクリアする。
  SessionStorageAllClear();
  // ユーザー情報を格納しているコンテキストの呼び出し。
  const UseUserContext = useContext(UserInfoContext);
  // /api/get_todo_list/から取得した返却値の状態管理。
  const [todoList, setTodoList] = React.useState<GetTodoListResProps[]>([
    {
      id: 0,
      todo: '',
      appltype: [''],
      del_flg: false,
      update_date_time: ''
    }
  ]);

  // Todoリスト一覧表示のために/api/get_todo_list/を呼び出す。user_idで検索。
  React.useEffect(() => {
    getTodoList(UseUserContext.user_id).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。
        console.log('一覧取得失敗。');
      } else {
        setTodoList(data);
      }
    });
  }, [UseUserContext]);

  return <TopPageView todoList={todoList} />;
};
