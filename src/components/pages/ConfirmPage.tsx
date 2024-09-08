import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResistrationTypeDisplayProps } from '../pages/InputPage';
import { New, Modify, Delete } from '../const/RegistrationType';
import { ConfirmPageView } from '../organisms/ConfirmPageView';
import { TODO, INPUT } from '../const/RoutingPath';
import { AddTodoResProps } from '../callApi/AddTodo';
import { UpdateTodoResProps } from '../callApi/UpdateTodo';
import { DeleteTodoResProps } from '../callApi/DeleteTodo';
import { selectTodoListInfo } from '../../store/TodoListInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderProps } from '../const/HeaderInfo';
import { callAddTodo } from '../callApi/callApiPromise/CallAddTodo';
import { callDeleteTodo } from '../callApi/callApiPromise/CallDeleteTodo';
import { callUpdateTodo } from '../callApi/callApiPromise/CallUpdateTodo';
import { setTodoInfo } from '../../store/AddTodoSlice';
import { setUpdateTodoInfo } from '../../store/UpdateTodoSlice';
import { setDeleteTodoInfo } from '../../store/DeleteTodoSlice';
import Cookies from 'js-cookie';

// 確認画面のロジックコンポーネント
export const ConfirmPage: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  // reduxストアへの値のディスパッチ。
  const dispatch = useDispatch();

  // ユーザー情報を取得。
  const todoListInfo = useSelector(selectTodoListInfo);

  // 登録種別によって確認画面の表示内容を切り替える。
  let confirmItemName: ResistrationTypeDisplayProps = {
    title: '',
    todoDisplay: ''
  };
  switch (todoListInfo.applType) {
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
    if (todoListInfo.applType === New) {
      // Todo新規登録API実行。
      callAddTodo(
        todoListInfo.user_id,
        todoListInfo.todo,
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('todoapp-csrftoken'),
            'Content-Type': 'application/json'
          } as HeaderProps
        },
        navigate
      ).then(data => {
        const resData = data as AddTodoResProps;

        // 返却値をセット。
        dispatch(setTodoInfo(resData));
      });
    } else if (todoListInfo.applType === Modify) {
      // Todo更新API実行。
      callUpdateTodo(
        todoListInfo.todo_id,
        todoListInfo.user_id,
        todoListInfo.todo,
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('todoapp-csrftoken'),
            'Content-Type': 'application/json'
          } as HeaderProps
        },
        navigate
      ).then(data => {
        // 返却値。
        const resData = data as UpdateTodoResProps;

        // 返却値をセット。
        dispatch(setUpdateTodoInfo(resData));
      });
    } else {
      // Todo削除API実行。
      callDeleteTodo(
        todoListInfo.todo_id,
        todoListInfo.user_id,
        {
          headers: {
            // POST時にCSRFトークン検証をするためヘッダーで送信。
            'X-CSRFToken': Cookies.get('todoapp-csrftoken'),
            'Content-Type': 'application/json'
          } as HeaderProps
        },
        navigate
      ).then(data => {
        // 返却値。
        const resData = data as DeleteTodoResProps;

        // 返却値をセット。
        dispatch(setDeleteTodoInfo(resData));
      });
    }
    // 新規・変更・解約処理後はトップページに戻る。
    navigate(TODO);
  };

  // 戻るボタン押下時。
  const handlePageBack = () => {
    // 削除以外は入力画面に戻り、削除の場合はトップ画面に戻る。
    if (todoListInfo.applType !== Delete) {
      navigate(INPUT);
    } else {
      navigate(TODO);
    }
  };

  return (
    <ConfirmPageView
      confirmItemNameList={confirmItemName}
      todoForm={todoListInfo}
      handleSubmit={handleSubmit}
      handlePageBack={handlePageBack}
    />
  );
};
