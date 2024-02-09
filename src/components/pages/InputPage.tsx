import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONFIRM } from '../const/RoutingPath.tsx';
import { TodoForm } from '../const/Form.tsx';
import { SessionStorageSet, SessionStorageItemGet } from '../utils/SessionStorageUtils.tsx';
import { InputPageView } from '../organisms/InputPageView.tsx';
import { New, Modify } from '../const/RegistrationType.tsx';
import { TOP } from '../const/RoutingPath.tsx';

export interface SessionStorageFormDataProps {
  todo?: string;
  date?: string;
  applType?: string;
}

export interface ResistrationTypeDisplayProps {
  title: string;
  todoDisplay: string;
  todoPlaceholder?: string;
}

// 入力画面のロジックコンポーネント
export const InputPage: React.FC = () => {
  const navigate = useNavigate();

  // useState一覧
  // 入力フォームの入力状態を管理。
  const [todoForm, setTodoForm] = React.useState<SessionStorageFormDataProps>({
    todo: '',
    date: '',
    applType: ''
  });

  // 入力ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormData: SessionStorageFormDataProps = SessionStorageItemGet(TodoForm);
    // セッションストレージの値を入力フォームにセット。
    if (getFormData) {
      setTodoForm({ todo: getFormData.todo, date: getFormData.date, applType: getFormData.applType });
    }
  }, []);

  // 入力フォームの値が変更された時に実行。
  const handleInputChange = e => {
    setTodoForm({ todo: e.target.value, date: todoForm.date, applType: todoForm.applType });
  };

  // 確認ボタンが押下された時に実行。
  const handleConirm = () => {
    // セッションストレージに入力したフォームの値をセット。
    SessionStorageSet(TodoForm, {
      todo: todoForm.todo,
      date: todoForm.date,
      applType: todoForm.applType
    });
    // 確認画面へ遷移。
    navigate(CONFIRM);
  };

  // 戻るボタン押下時にトップ画面へ遷移。
  const handlePageBack = () => {
    navigate(TOP);
  };

  // 登録種別によって入力画面の表示内容を切り替える。
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
