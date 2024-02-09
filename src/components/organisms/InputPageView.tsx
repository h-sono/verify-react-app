import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOP } from '../const/RoutingPath.tsx';
import { InputTextField } from '../molecules/InputTextField.tsx';
import { SessionStorageFormDataProps } from '../pages/InputPage.tsx';
import { ResistrationTypeDisplayProps } from '../pages/InputPage.tsx';

export interface InputPageViewProps {
  inputItemNameList: ResistrationTypeDisplayProps;
  todoForm: SessionStorageFormDataProps;
  handleInputChange: (e: any) => void;
  handleSubmit: () => void;
}

// 入力画面のビューコンポーネント
export const InputPageView: React.FC<InputPageViewProps> = props => {
  const { inputItemNameList, todoForm, handleInputChange, handleSubmit } = props;
  const navigate = useNavigate();

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
      <button onClick={handleSubmit}>確認</button>
      <button
        onClick={() => {
          navigate(TOP);
        }}
      >
        戻る
      </button>
    </div>
  );
};
