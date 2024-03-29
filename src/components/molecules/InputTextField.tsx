import React from 'react';
import { TextField } from '@mui/material';
import { InputTitle, StyledTextField } from '../style/InputTextFieldStyle.tsx';

export interface InputTextFieldProps {
  inputItemName: string;
  id: string;
  value: string | undefined;
  placeholder?: string;
  handleInputChange?: (e: any) => void;
  inputProps?: object;
}

// 入力・確認用のテキストフィールド
export const InputTextField: React.FC<InputTextFieldProps> = props => {
  const { inputItemName, id, value, placeholder = '入力してください', handleInputChange, inputProps = {} } = props;
  return (
    <div>
      <InputTitle>{inputItemName}</InputTitle>
      <br />
      <StyledTextField
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        InputProps={inputProps}
        multiline
        minRows='10'
      />
    </div>
  );
};
