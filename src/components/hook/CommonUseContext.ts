import React from 'react';

// UserInfoContextの型定義。
export interface UserInfoContextProps {
  user_id?: number;
  user_name?: string;
  login_flg: boolean;
}
// ユーザー情報を格納するコンテキスト。
export const UserInfoContext = React.createContext<UserInfoContextProps>({
  user_id: 0,
  user_name: '',
  login_flg: false
});
