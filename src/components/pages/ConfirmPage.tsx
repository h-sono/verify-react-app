import React from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { INPUT } from '../const/RoutingPath.tsx';

export interface SessionsetStorageFormData {
  todo: string;
  date: string;
  applType: string;
}

// 確認画面
export const ConfirmPage: React.FC = () => {
  const navigate = useNavigate();

  // セッションストレージのフォームデータを管理。
  const [storageFormData, setStorageFormData] =
    React.useState<SessionsetStorageFormData>({
      todo: '',
      date: '',
      applType: ''
    });

  // 確認ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormDataStr = sessionStorage.getItem('SelectTodoForm');
    if (getFormDataStr) {
      const getFormData = JSON.parse(getFormDataStr);
      setStorageFormData({
        todo: getFormData.todo,
        date: getFormData.date,
        applType: getFormData.applType
      });
    }
  }, []);
  console.log(storageFormData);
  const handleClick = () => {
    navigate(INPUT);
  };

  return (
    <div>
      <p>確認ページ</p>
      <label>■ Todo確認</label>
      <br />
      <TextField
        id='todo'
        value={storageFormData.todo}
        InputProps={{ readOnly: true }}
      />
      <br />
      <button>登録</button>
      <button onClick={handleClick}>戻る</button>
    </div>
  );
};
