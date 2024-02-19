import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONFIRM } from '../const/RoutingPath.tsx';
import { TodoForm } from '../const/Form.tsx';
import {
  SessionStorageSet,
  SessionStorageItemGet,
  SessionStorageTodoFormProps
} from '../utils/SessionStorageUtils.tsx';
import { InputPageView } from '../organisms/InputPageView.tsx';
import { New, Modify } from '../const/RegistrationType.tsx';
import { TODO } from '../const/RoutingPath.tsx';

export interface ResistrationTypeDisplayProps {
  title: string;
  todoDisplay: string;
  todoPlaceholder?: string;
}

// 入力画面のロジックコンポーネント
export const InputPage: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  // セッションストレージのTodoFormから取得した値の状態管理。
  const [todoForm, setTodoForm] = React.useState<SessionStorageTodoFormProps>({
    user_id: 0,
    todo_id: 0,
    todo: '',
    date: '',
    applType: ''
  });

  // 入力ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormData: SessionStorageTodoFormProps = SessionStorageItemGet(TodoForm);
    // セッションストレージの値を入力フォームにセット。
    if (getFormData) {
      setTodoForm({
        user_id: getFormData.user_id,
        todo_id: getFormData.todo_id,
        todo: getFormData.todo,
        date: getFormData.date,
        applType: getFormData.applType
      });
    }
  }, []);

  // 入力フォームの値が変更された時に実行。todoの内容だけ変更される。
  const handleInputChange = e => {
    setTodoForm({
      user_id: todoForm.user_id,
      todo_id: todoForm.todo_id,
      todo: e.target.value,
      date: todoForm.date,
      applType: todoForm.applType
    });
  };

  // 確認ボタンが押下された時に実行。
  const handleConirm = () => {
    // セッションストレージに入力したフォームの値をセット。
    SessionStorageSet(TodoForm, {
      user_id: todoForm.user_id,
      todo_id: todoForm.todo_id,
      todo: todoForm.todo,
      date: todoForm.date,
      applType: todoForm.applType
    });
    // 確認画面へ遷移。
    navigate(CONFIRM);
  };

  // 戻るボタン押下時にトップ画面へ遷移。
  const handlePageBack = () => {
    navigate(TODO);
  };

  // 登録種別によって入力画面の表示内容を切り替える。削除時は入力画面に遷移しない。
  let inputItemName: ResistrationTypeDisplayProps = {
    title: '',
    todoDisplay: '',
    todoPlaceholder: ''
  };
  switch (todoForm.applType) {
    case New:
      inputItemName = {
        title: '新規入力画面',
        todoDisplay: '■ Todo内容新規入力',
        todoPlaceholder: 'Todo内容を入力してください'
      };
      break;
    case Modify:
      inputItemName = {
        title: '変更入力画面',
        todoDisplay: '■ Todo内容変更入力',
        todoPlaceholder: 'Todo内容を変更してください'
      };
      break;
    default:
      inputItemName = {
        title: '入力画面',
        todoDisplay: '■ Todo内容入力',
        todoPlaceholder: 'Todo内容を入力してください'
      };
  }

  return (
    <InputPageView
      inputItemNameList={inputItemName}
      todoForm={todoForm}
      handleInputChange={handleInputChange}
      handleConirm={handleConirm}
      handlePageBack={handlePageBack}
    />
  );
};
