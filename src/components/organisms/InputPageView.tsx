import React from 'react';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageTodoFormProps } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';

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
      <p>{inputItemNameList.title}</p>
      <br />
      <InputTextField
        id={'Todo'}
        value={todoForm.todo}
        placeholder={inputItemNameList.todoPlaceholder}
        inputItemName={inputItemNameList.todoDisplay}
        handleInputChange={handleInputChange}
      />
      <button onClick={handleConirm}>確認</button>
      <button onClick={handlePageBack}>戻る</button>
    </div>
  );
};
