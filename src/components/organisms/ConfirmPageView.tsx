import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INPUT } from '../const/RoutingPath.tsx';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageFormDataProps } from '../pages/InputPage.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';

export interface ConfirmPageViewProps {
  confirmItemNameList: ResistrationTypeDisplayProps;
  todoForm: SessionStorageFormDataProps;
  handleSubmit: () => void;
}

// 確認画面のビューコンポーネント
export const ConfirmPageView: React.FC<ConfirmPageViewProps> = props => {
  const { confirmItemNameList, todoForm } = props;
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          navigate(INPUT);
        }}
      >
        戻る
      </button>
    </div>
  );
};
