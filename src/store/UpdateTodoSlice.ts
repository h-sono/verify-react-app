import { UpdateTodoResProps } from '../components/callApi/UpdateTodo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Todo更新APIの返却値を管理するストア。
export const UpdateTodoSlice = createSlice({
  name: 'updateTodoInfo',
  initialState: {
    id: 0,
    error_flg: false
  } as UpdateTodoResProps,
  reducers: {
    setUpdateTodoInfo: (state, action: PayloadAction<UpdateTodoResProps>) => {
      state.id = action.payload.id;
      state.error_flg = action.payload.error_flg;
    },
    clearUpdateTodoInfo: state => {
      state.id = 0;
      state.error_flg = false;
    }
  }
});

// Todo更新APIのセット、削除。
export const { setUpdateTodoInfo, clearUpdateTodoInfo } = UpdateTodoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectUpdateTodoInfo = (state: { updateTodoInfo: UpdateTodoResProps }) => state.updateTodoInfo;

export default UpdateTodoSlice.reducer;
