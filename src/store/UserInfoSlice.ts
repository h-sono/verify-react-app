import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../useTypes/UserInfoTypes';

// ユーザー情報を管理するストア。
export const UserInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user_id: 0,
    user_name: '',
    login_flg: false
  } as UserInfo,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.user_id = action.payload.user_id;
      state.user_name = action.payload.user_name;
      state.login_flg = action.payload.login_flg;
    },
    clearUserInfo: state => {
      state.user_id = 0;
      state.user_name = '';
      state.login_flg = false;
    }
  }
});

// ユーザー情報のセット、削除。
export const { setUserInfo, clearUserInfo } = UserInfoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectUserInfo = (state: { userInfo: UserInfo }) => state.userInfo;

export default UserInfoSlice.reducer;
