import { Get } from './Get';

export interface LogoutResProps {
  logout_flg: boolean;
}

export const GetLogout = () => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get<LogoutResProps>('/api/todo/logout/');
};
