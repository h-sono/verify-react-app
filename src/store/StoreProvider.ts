import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
// セッションストレージを使用。
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import UserInfoSlice from '../store/UserInfoSlice';
import TodoListInfoSlice from '../store/TodoListInfoSlice';
import LoginInfoSlice from './PostLoginSlice';
import AddTodoSlice from './AddTodoSlice';
import DeleteTodoSlice from './DeleteTodoSlice';
import UpdateTodoSlice from './UpdateTodoSlice';
import TodoSlice from './TodoListSlice';

// 永続化設定。
const persistConfig = {
  // セッションストレージ内のキー名。
  key: 'todoPersistData',
  // セッションストレージを指定。
  storage: storageSession,
  // 永続化するストアのみをホワイトリストに指定。
  // ※永続化するとセッションストレージに表示される(storage参照)。
  whitelist: ['userInfo', 'todoInfo', 'todoListInfo', 'addTodoInfo', 'updateTodoInfo', 'deleteTodoInfo']
};

// スライス定義を追加。
const rootReducer = combineReducers({
  // ユーザー情報を管理。
  userInfo: UserInfoSlice,
  // Todo取得APIの返却値を管理。
  todoInfo: TodoSlice,
  // 特定のTodoリストのデータを管理。
  todoListInfo: TodoListInfoSlice,
  // ログイン情報を管理。
  loginInfo: LoginInfoSlice,
  // Todo新規登録APIのデータを管理。
  addTodoInfo: AddTodoSlice,
  // Todo更新APIのデータを管理。
  updateTodoInfo: UpdateTodoSlice,
  // Todo削除APIのデータを管理。
  deleteTodoInfo: DeleteTodoSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ストアの作成。
export const storeProvider = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// persistorの作成。
export const persistor = persistStore(storeProvider);
