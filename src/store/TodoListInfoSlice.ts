import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoListProps {
  user_id: number;
  todo_id: number;
  todo: string;
  date: string;
  applType: string;
}

// 特定のTodoリスト情報を管理するストア。
export const TodoListInfoSlice = createSlice({
  name: 'todoInfo',
  initialState: {
    user_id: 0,
    todo_id: 0,
    todo: '',
    date: '',
    applType: ''
  } as TodoListProps,
  reducers: {
    setTodoListInfo: (state, action: PayloadAction<TodoListProps>) => {
      state.user_id = action.payload.user_id;
      state.todo_id = action.payload.todo_id;
      state.todo = action.payload.todo;
      state.date = action.payload.date;
      state.applType = action.payload.applType;
    },
    clearTodoListInfo: state => {
      state.user_id = 0;
      state.todo_id = 0;
      state.todo = '';
      state.date = '';
      state.applType = '';
    }
  }
});

// 特定のTodoリスト情報のセット、削除。
export const { setTodoListInfo, clearTodoListInfo } = TodoListInfoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectTodoListInfo = (state: { todoListInfo: TodoListProps }) => state.todoListInfo;

export default TodoListInfoSlice.reducer;
