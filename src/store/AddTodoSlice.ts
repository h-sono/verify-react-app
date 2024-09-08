import { AddTodoResProps } from '../components/callApi/AddTodo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Todoリスト新規登録APIの返却値を管理するストア。
export const AddTodoSlice = createSlice({
  name: 'addTodoInfo',
  initialState: {
    id: 0,
    error_flg: false
  } as AddTodoResProps,
  reducers: {
    setTodoInfo: (state, action: PayloadAction<AddTodoResProps>) => {
      state.id = action.payload.id;
      state.error_flg = action.payload.error_flg;
    },
    clearTodoInfo: state => {
      state.id = 0;
      state.error_flg = false;
    }
  }
});

// Todoリスト新規登録APIのセット、削除。
export const { setTodoInfo, clearTodoInfo } = AddTodoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectAddTodoInfo = (state: { addTodoInfo: AddTodoResProps }) => state.addTodoInfo;

export default AddTodoSlice.reducer;
