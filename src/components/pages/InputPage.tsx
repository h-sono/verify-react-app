import React from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TOP, CONFIRM } from '../const/RoutingPath.tsx';
import { SelectTodoForm } from '../const/Form.tsx';

export interface FormState {
  todo: string;
}

export interface SessionsetStorageFormData {
  todo: string;
  date: string;
  applType: string;
}

// 入力画面
export const InputPage: React.FC = () => {
  const navigate = useNavigate();

  // 入力フォームの入力状態を管理。
  const [inputForm, setInputForm] = React.useState<FormState>({ todo: '' });
  // セッションストレージのフォームデータを管理。
  const [storageFormData, setStorageFormData] =
    React.useState<SessionsetStorageFormData>({
      todo: '',
      date: '',
      applType: ''
    });

  // 入力ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormDataStr = sessionStorage.getItem('SelectTodoForm');
    if (getFormDataStr) {
      const getFormData = JSON.parse(getFormDataStr);
      setStorageFormData({
        todo: getFormData.todo,
        date: getFormData.date,
        applType: getFormData.applType
      });
      // セッションストレージに保存されているtodoを入力フォームにセット。
      setInputForm({ todo: getFormData.todo });
    }
  }, []);

  // 入力フォームの値が変更された時に実行。
  const handleInputChange = e => {
    setInputForm({ todo: e.target.value });
  };

  // フォームが送信された時に実行。
  const handleSubmit = () => {
    // 確認画面へ遷移。
    navigate(CONFIRM);
    // セッションストレージに入力したフォームの値をセット。
    sessionStorage.setItem(
      'SelectTodoForm',
      JSON.stringify({
        todo: inputForm.todo,
        date: storageFormData.date,
        applType: storageFormData.applType
      })
    );
  };

  // 戻るボタンが押下されたときに実行。
  const pageBack = () => {
    navigate(TOP);
  };

  return (
    <div>
      <p>入力ページ</p>
      <label>■ Todo入力</label>
      <br />
      <TextField
        id='todo'
        value={inputForm.todo}
        placeholder='todo内容を入力してください'
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleSubmit}>確認</button>
      <button onClick={pageBack}>戻る</button>
    </div>
  );
};
