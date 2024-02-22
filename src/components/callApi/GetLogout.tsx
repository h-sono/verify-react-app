import { Get } from './Get.tsx';

export interface LogoutResProps {
  logout_flg: boolean;
}

export const GetLogout = () => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get('/api/todo/logout/');
};
