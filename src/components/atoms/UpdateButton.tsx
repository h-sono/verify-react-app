import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectTodoForm } from '../const/Form.tsx';
import { SessionStorageSet } from '../utils/SessionStorageUtils.tsx';

export interface UpdateButtonInfo {
  todo: string;
  date: string;
  pagePath: string;
  // 申し込み種別：N(New：新規登録),M(Modify：変更登録),D(Delete：削除)
  applType: string;
}

export const UpdateButton: React.FC<UpdateButtonInfo> = props => {
  const { todo, date, pagePath, applType } = props;
  const navigate = useNavigate();

  // 変更or削除ボタンを押下するときのアクション。
  const handleButtonClick = () => {
    // セッションストレージに選択したTodoの情報を保存。
    SessionStorageSet(SelectTodoForm, {
      todo: todo,
      date: date,
      applType: applType
    });
    // ボタンを押下したときに遷移するページを指定。
    navigate(pagePath);
    // ボタンを押下したしたときにtrueに切り替え。
  };

  return (
    <button onClick={handleButtonClick}>
      {applType === 'M' ? '変更' : '削除'}
    </button>
  );
};
