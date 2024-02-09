import React from 'react';
import { SessionStorageItemGet } from '../utils/SessionStorageUtils.tsx';
import { TodoForm } from '../const/Form.tsx';
import { SessionStorageFormDataProps } from '../pages/InputPage.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';
import { New, Modify } from '../const/RegistrationType.tsx';
import { ConfirmPageView } from '../organisms/ConfirmPageView.tsx';

// 確認画面のロジックコンポーネント
export const ConfirmPage: React.FC = () => {
  // セッションストレージに保存されているフォームデータを管理。
  const [storageTodoFormData, setStorageTodoFormData] = React.useState<SessionStorageFormDataProps>({
    todo: '',
    date: '',
    applType: ''
  });

  // 確認ページ描画時にセッションストレージから値を取得。
  React.useEffect(() => {
    const getFormData: SessionStorageFormDataProps = SessionStorageItemGet(TodoForm);
    if (getFormData) {
      setStorageTodoFormData({
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
    default:
      confirmItemName = {
        title: '確認画面',
        todoDisplay: '■ Todo内容確認'
      };
  }

  const handleSubmit = () => {
    console.log('登録API呼び出しを定義');
  };

  return (
    <ConfirmPageView confirmItemNameList={confirmItemName} todoForm={storageTodoFormData} handleSubmit={handleSubmit} />
  );
};
