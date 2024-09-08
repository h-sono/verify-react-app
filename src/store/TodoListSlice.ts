import { GetTodoListResProps } from '../components/callApi/GetTodoList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Todo取得API返却値を管理するストア。
export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo_list: []
  } as GetTodoListResProps,
  reducers: {
    setTodo: (state, action: PayloadAction<GetTodoListResProps>) => {
      state.todo_list = action.payload.todo_list;
    },
    clearTodo: state => {
      state.todo_list = [];
    }
  }
});

// Todo取得API返却値のセット、削除。
export const { setTodo, clearTodo } = TodoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectTodo = (state: { todo: GetTodoListResProps }) => state.todo;

export default TodoSlice.reducer;
