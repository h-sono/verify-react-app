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
  const [todoList, setTodoList] = React.useState<GetTodoListResProps>({
    todo_list: [
      {
        id: 0,
        todo: '',
        appltype: [''],
        del_flg: false,
        update_date_time: ''
      }
    ]
  });

  // Todoリスト一覧表示のために/api/get_todo_list/を呼び出す。UseUserContext.user_idで検索するよう改修。
  console.log(UseUserContext.user_id);
  React.useEffect(() => {
    getTodoList(1).then((data: any) => {
      console.log('data-----------------------------------');
      console.log(data);
      console.log('data-----------------------------------');
      if (data.error_flg) {
        // TODO:エラーを出す。
        console.log('一覧取得失敗。');
      } else {
        setTodoList(data);
      }
    });
  }, [UseUserContext]);

  console.log('todoList-----------------------------------');
  console.log(todoList);
  console.log('todoList-----------------------------------');

  return <TopPageView todoList={todoList} />;
};
