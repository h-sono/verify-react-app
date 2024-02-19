import React from 'react';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageTodoFormProps } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';

export interface ConfirmPageViewProps {
  confirmItemNameList: ResistrationTypeDisplayProps;
  todoForm: SessionStorageTodoFormProps;
  handleSubmit: () => void;
  handlePageBack: () => void;
}

// 確認画面のビューコンポーネント
export const ConfirmPageView: React.FC<ConfirmPageViewProps> = props => {
  const { confirmItemNameList, todoForm, handleSubmit, handlePageBack } = props;

  return (
    <div>
      <p>{confirmItemNameList.title}</p>
      <br />
      <InputTextField
        id={'Todo'}
        value={todoForm.todo}
        inputItemName={confirmItemNameList.todoDisplay}
        inputProps={{ readOnly: true }}
      />
      <br />
      <button onClick={handleSubmit}>登録</button>
      <button onClick={handlePageBack}>戻る</button>
    </div>
  );
};
