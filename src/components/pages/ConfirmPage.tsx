import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { SessionStorageItemGet } from '../utils/SessionStorageUtils.tsx';
import { TodoForm } from '../const/Form.tsx';
import { SessionStorageTodoFormProps } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';
import { New, Modify, Delete } from '../const/RegistrationType.tsx';
import { ConfirmPageView } from '../organisms/ConfirmPageView.tsx';
import { TODO, INPUT } from '../const/RoutingPath.tsx';
import { AddTodo, AddTodoResProps } from '../callApi/AddTodo.tsx';
import { UpdateTodo, UpdateTodoResProps } from '../callApi/UpdateTodo.tsx';
import { DeleteTodo, DeleteTodoResProps } from '../callApi/DeleteTodo.tsx';

// 確認画面のロジックコンポーネント
export const ConfirmPage: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();
  // セッションストレージのTodoFormから取得した値の状態管理。
  const [storageTodoFormData, setStorageTodoFormData] = React.useState<SessionStorageTodoFormProps>({
    user_id: 0,
    todo_id: 0,
    todo: '',
    date: '',
    applType: ''
  });
  // TODO:返却値を使わない場合は不要。/api/add_todo/の返却値を管理。
  const [addTodoRes, setAddTodoRes] = React.useState<AddTodoResProps>({ id: 0, error_flg: false });
  console.log('add_todo.pyの返却値: ' + addTodoRes);
  // TODO:返却値を使わない場合は不要。/api/add_todo/の返却値を管理。
  const [updateTodoRes, setUpdateTodoRes] = React.useState<UpdateTodoResProps>({ id: 0, error_flg: false });
  console.log('update_todo.pyの返却値: ' + updateTodoRes);
  // TODO:返却値を使わない場合は不要。/api/add_todo/の返却値を管理。
  const [deleteTodoRes, setDeleteTodoRes] = React.useState<DeleteTodoResProps>({ id: 0, error_flg: false });
  console.log('delete_todo.pyの返却値: ' + deleteTodoRes);

  // 確認ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormData: SessionStorageTodoFormProps = SessionStorageItemGet(TodoForm);
    if (getFormData) {
      setStorageTodoFormData({
        user_id: getFormData.user_id,
        todo_id: getFormData.todo_id,
        todo: getFormData.todo,
        date: getFormData.date,
        applType: getFormData.applType
      });
    }
  }, []);

  // 登録種別によって確認画面の表示内容を切り替える。
  let confirmItemName: ResistrationTypeDisplayProps = {
    title: '',
    todoDisplay: ''
  };
  switch (storageTodoFormData.applType) {
    case New:
      confirmItemName = {
        title: '新規確認画面',
        todoDisplay: '■ Todo内容新規確認'
      };
      break;
    case Modify:
      confirmItemName = {
        title: '変更確認画面',
        todoDisplay: '■ Todo内容変更確認'
      };
      break;
    case Delete:
      confirmItemName = {
        title: '削除確認画面',
        todoDisplay: '■ Todo内容削除確認'
      };
      break;
    default:
      confirmItemName = {
        title: '確認画面',
        todoDisplay: '■ Todo内容確認'
      };
  }

  // 登録ボタンを押下したときのアクション。
  const handleSubmit = () => {
    if (storageTodoFormData.applType === New) {
      // 新規登録の場合は/api/add_todo/を呼び出す。
      AddTodo(
        { user_id: storageTodoFormData.user_id, todo: storageTodoFormData.todo },
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          }
        }
      ).then((data: any) => {
        if (data.error_flg) {
          // TODO:エラーを出す。暫時入力画面に戻る。
          navigate(INPUT);
        } else {
          setAddTodoRes(data);
        }
      });
    } else if (storageTodoFormData.applType === Modify) {
      // 変更登録の場合は/api/update_todo/を呼び出す。
      UpdateTodo(
        { todo_id: storageTodoFormData.todo_id, user_id: storageTodoFormData.user_id, todo: storageTodoFormData.todo },
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          }
        }
      ).then((data: any) => {
        if (data.error_flg) {
          // TODO:エラーを出す。暫時入力画面に戻る。
          navigate(INPUT);
        } else {
          setUpdateTodoRes(data);
        }
      });
    } else {
      // 削除の場合は/api/delete_todo/を呼び出す。
      DeleteTodo(
        { todo_id: storageTodoFormData.todo_id, user_id: storageTodoFormData.user_id },
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          }
        }
      ).then((data: any) => {
        if (data.error_flg) {
          // TODO:エラーを出す。暫時入力画面に戻る。
          navigate(INPUT);
        } else {
          setDeleteTodoRes(data);
        }
      });
    }
    // 新規・変更・解約処理後はトップページに戻る。
    navigate(TODO);
  };

  // 戻るボタン押下時。
  const handlePageBack = () => {
    // 削除以外は入力画面に戻り、削除の場合はトップ画面に戻る。
    if (storageTodoFormData.applType !== Delete) {
      navigate(INPUT);
    } else {
      navigate(TODO);
    }
  };

  return (
    <ConfirmPageView
      confirmItemNameList={confirmItemName}
      todoForm={storageTodoFormData}
      handleSubmit={handleSubmit}
      handlePageBack={handlePageBack}
    />
  );
};
