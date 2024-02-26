import styled from 'styled-components';
import { TextField } from '@mui/material';

// 入力用テキストフィールドのタイトルスタイル。
export const InputTitle = styled.div`
  font-size: 18px;
`;

// TextFieldのスタイル。
export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontSize: '16px'
  },
  // 横幅の調整。縦幅はInputTextField側のmultilineとminRowsで調整。
  width: '700px'
});
