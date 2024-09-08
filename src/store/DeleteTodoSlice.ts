import { DeleteTodoResProps } from '../components/callApi/DeleteTodo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Todo削除APIの返却値を管理するストア。
export const DeleteTodoSlice = createSlice({
  name: 'deleteTodoInfo',
  initialState: {
    id: 0,
    error_flg: false
  } as DeleteTodoResProps,
  reducers: {
    setDeleteTodoInfo: (state, action: PayloadAction<DeleteTodoResProps>) => {
      state.id = action.payload.id;
      state.error_flg = action.payload.error_flg;
    },
    clearDeleteTodoInfo: state => {
      state.id = 0;
      state.error_flg = false;
    }
  }
});

// Todo削除APIのセット、削除。
export const { setDeleteTodoInfo, clearDeleteTodoInfo } = DeleteTodoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectDeleteTodoInfo = (state: { deleteTodoInfo: DeleteTodoResProps }) => state.deleteTodoInfo;

export default DeleteTodoSlice.reducer;
