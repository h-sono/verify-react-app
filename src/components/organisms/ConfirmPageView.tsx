import React from 'react';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageTodoFormProps } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';
import { Header } from '../atoms/Header.tsx';
import { ConfirmTitle, BackButton, ResisterButton, ButtonContainer } from '../style/ConfirmPageStyle.tsx';

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
        <ResisterButton onClick={handleSubmit}>登録</ResisterButton>
      </ButtonContainer>
    </div>
  );
};
