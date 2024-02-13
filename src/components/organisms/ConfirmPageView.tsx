import React from 'react';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageFormDataProps } from '../pages/InputPage.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';

export interface ConfirmPageViewProps {
  confirmItemNameList: ResistrationTypeDisplayProps;
  todoForm: SessionStorageFormDataProps;
  // handleSubmit: () => void;
  handlePageBack: () => void;
}

// 確認画面のビューコンポーネント
export const ConfirmPageView: React.FC<ConfirmPageViewProps> = props => {
  const { confirmItemNameList, todoForm, handlePageBack } = props;

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
      <button>登録</button>
      <button onClick={handlePageBack}>戻る</button>
    </div>
  );
};
