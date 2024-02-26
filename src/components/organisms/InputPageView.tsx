import React from 'react';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageTodoFormProps } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';
import { Header } from '../atoms/Header.tsx';
import { InputTitle, BackButton, ConfirmButton, ButtonContainer } from '../style/InputPageStyle.tsx';

export interface InputPageViewProps {
  inputItemNameList: ResistrationTypeDisplayProps;
  todoForm: SessionStorageTodoFormProps;
  handleInputChange: (e: any) => void;
  handleConirm: () => void;
  handlePageBack: () => void;
}

// 入力画面のビューコンポーネント
export const InputPageView: React.FC<InputPageViewProps> = props => {
  const { inputItemNameList, todoForm, handleInputChange, handleConirm, handlePageBack } = props;

  return (
    <div>
      <Header />
      <InputTitle>{inputItemNameList.title}</InputTitle>
      <br />
      <InputTextField
        id={'Todo'}
        value={todoForm.todo}
        placeholder={inputItemNameList.todoPlaceholder}
        inputItemName={inputItemNameList.todoDisplay}
        handleInputChange={handleInputChange}
      />
      <ButtonContainer>
        <BackButton onClick={handlePageBack}>戻る</BackButton>
        <ConfirmButton onClick={handleConirm}>確認</ConfirmButton>
      </ButtonContainer>
    </div>
  );
};
