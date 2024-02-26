import React from 'react';
import { TopPageView } from '../organisms/TopPageView.tsx';
import {
  SessionStorageItemGet,
  SessionStorageUserInfoFormProps,
  SessionStorageSpecificKeysClear
} from '../utils/SessionStorageUtils.tsx';
import { getTodoList } from '../callApi/GetTodoList.tsx';
import { GetTodoListResProps } from '../callApi/GetTodoList.tsx';
import { UserInfoContext } from '../hook/CommonUseContext.tsx';
import { UserInfoForm } from '../const/Form.tsx';
import { TodoForm } from '../const/Form.tsx';
import { Header } from '../atoms/Header.tsx';
import { BodyComment } from '../style/TopPageStyle.tsx';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  // 他の画面からトップページに遷移してきたときにセッションストレージの特定のキーをクリアする。
  SessionStorageSpecificKeysClear([TodoForm]);

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
  // セッションストレージのUserInfoFormから取得した値の状態管理。
  const [userInfoForm, setUserInfoForm] = React.useState<SessionStorageUserInfoFormProps>({
    user_id: 0,
    user_name: '',
    login_flg: false
  });

  // トップページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormData: SessionStorageUserInfoFormProps = SessionStorageItemGet(UserInfoForm);
    // セッションストレージの値を入力フォームにセット。
    if (getFormData) {
      setUserInfoForm({
        user_id: getFormData.user_id,
        user_name: getFormData.user_name,
        login_flg: getFormData.login_flg
      });
    }
  }, []);

  // Todoリスト一覧表示のために/api/get_todo_list/を呼び出す。
  React.useEffect(() => {
    // user_idが0(ありえない値)であればgetTodoListを実行しない。
    if (userInfoForm.user_id === 0) {
      return;
    }
    getTodoList(userInfoForm.user_id).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。
        console.log('一覧取得失敗。');
      } else {
        setTodoList(data);
      }
    });
  }, [userInfoForm.user_id]);

  return (
    <div>
      <Header />
      {userInfoForm.user_id > 0 ? (
        // コンテキストにユーザー情報を格納する。
        // ※セッションストレージにユーザー情報が保存されているので本来不要だがサンプルとしてuseContextを使用。
        <UserInfoContext.Provider
          value={{
            user_id: userInfoForm.user_id,
            user_name: userInfoForm.user_name,
            login_flg: userInfoForm.login_flg
          }}
        >
          <TopPageView todoList={todoList} />
        </UserInfoContext.Provider>
      ) : (
        <BodyComment>ログインしてください。</BodyComment>
      )}
    </div>
  );
};
