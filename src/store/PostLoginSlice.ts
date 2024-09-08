import { LoginResProps } from '../components/callApi/PostLogin';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ログインAPIの返却値を管理するストア。
export const LoginInfoSlice = createSlice({
  name: 'loginInfo',
  initialState: {
    user_id: 0,
    user_name: '',
    login_flg: false,
    code: ''
  } as LoginResProps,
  reducers: {
    setLoginInfo: (state, action: PayloadAction<LoginResProps>) => {
      state.user_id = action.payload.user_id;
      state.user_name = action.payload.user_name;
      state.login_flg = action.payload.login_flg;
      state.code = action.payload.code;
    },
    clearLoginInfo: state => {
      state.user_id = 0;
      state.user_name = '';
      state.login_flg = false;
      state.code = '';
    }
  }
});

// ログイン情報のセット、削除。
export const { setLoginInfo, clearLoginInfo } = LoginInfoSlice.actions;

// StoreProvider.tsのcombineReducers内のキー名とstateの名称を統一。
export const selectLoginInfo = (state: { loginInfo: LoginResProps }) => state.loginInfo;

export default LoginInfoSlice.reducer;
