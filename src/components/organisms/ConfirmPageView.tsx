import React from 'react';
import { InputTextField } from '../molecules/InputTextField';
import { ResistrationTypeDisplayProps } from '../pages/InputPage';
import { Header } from '../atoms/Header';
import { ConfirmTitle, BackButton, ResisterButton, ButtonContainer } from '../style/ConfirmPageStyle';

export interface TodoForm {
  user_id: number;
  todo_id: number;
  todo: string;
  date: string;
  applType: string;
}

export interface ConfirmPageViewProps {
  confirmItemNameList: ResistrationTypeDisplayProps;
  todoForm: TodoForm;
  handleSubmit: () => void;
  handlePageBack: () => void;
}

// 確認画面のビューコンポーネント
export const ConfirmPageView: React.FC<ConfirmPageViewProps> = props => {
  const { confirmItemNameList, todoForm, handleSubmit, handlePageBack } = props;

  return (
    <div>
      <Header />
      <ConfirmTitle>{confirmItemNameList.title}</ConfirmTitle>
      <br />
      <InputTextField
        id={'Todo'}
        value={todoForm.todo}
        inputItemName={confirmItemNameList.todoDisplay}
        inputProps={{ readOnly: true }}
      />
      <br />
      <ButtonContainer>
        <BackButton onClick={handlePageBack}>戻る</BackButton>
        <ResisterButton onClick={handleSubmit}>{todoForm.applType === 'D' ? '削除' : '登録'}</ResisterButton>
      </ButtonContainer>
    </div>
  );
};
