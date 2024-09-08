import React from 'react';
import { TopPageView } from '../organisms/TopPageView';
import { GetTodoListResProps } from '../callApi/GetTodoList';
import { Header } from '../atoms/Header';
import { BodyComment } from '../style/TopPageStyle';
import { selectUserInfo } from '../../store/UserInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { callGetTodoList } from '../callApi/callApiPromise/CallGetTodoList';
import { setTodo } from '../../store/TodoListSlice';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  // reduxストアへの値のディスパッチ。
  const dispatch = useDispatch();

  // ユーザー情報を取得。
  const userInfo = useSelector(selectUserInfo);

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

  // Todoリスト一覧表示のために/api/get_todo_list/を呼び出す。
  React.useEffect(() => {
    // user_idが0(ありえない値)であればgetTodoListを実行しない。
    if (!userInfo.user_id) return;

    callGetTodoList(userInfo.user_id).then(data => {
      // 返却値。
      const resData = data as GetTodoListResProps;

      // 返却値をセット。
      dispatch(setTodo(resData));
      setTodoList(resData);
    });
  }, [dispatch, userInfo]);

  return (
    <div>
      <Header />
      {userInfo.user_id && userInfo.user_id > 0 ? (
        <TopPageView todoList={todoList} />
      ) : (
        <BodyComment>ログインしてください。</BodyComment>
      )}
    </div>
  );
};
