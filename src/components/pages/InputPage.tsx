import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONFIRM } from '../const/RoutingPath';
import { InputPageView } from '../organisms/InputPageView';
import { New, Modify } from '../const/RegistrationType';
import { TODO } from '../const/RoutingPath';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoListInfo, setTodoListInfo, TodoListProps } from '../../store/TodoListInfoSlice';

export interface ResistrationTypeDisplayProps {
  title: string;
  todoDisplay: string;
  todoPlaceholder?: string;
}

// 入力画面のロジックコンポーネント
export const InputPage: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  // reduxストアへの値のディスパッチ。
  const dispatch = useDispatch();

  // ユーザー情報を取得。
  const todoListInfo = useSelector(selectTodoListInfo);

  // セッションストレージのTodoFormから取得した値の状態管理。
  const [todoForm, setTodoForm] = React.useState<TodoListProps>({
    user_id: 0,
    todo_id: 0,
    todo: '',
    date: '',
    applType: ''
  });

  // 特定のTodoリスト情報をセット。
  React.useEffect(() => {
    setTodoForm({
      user_id: todoListInfo.user_id,
      todo_id: todoListInfo.todo_id,
      todo: todoListInfo.todo,
      date: todoListInfo.date,
      applType: todoListInfo.applType
    });
  }, [todoListInfo]);

  // 入力フォームの値が変更された時に実行。todoの内容だけ変更される。
  const handleInputChange = (e: { target: { value: any } }) => {
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
    // 選択したTodoの情報をreduxストアに保存。
    dispatch(
      setTodoListInfo({
        user_id: todoForm.user_id,
        todo_id: todoForm.todo_id,
        todo: todoForm.todo,
        date: todoForm.date,
        applType: todoForm.applType
      })
    );
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
