import { Get } from './Get';

export const GetCsrfToken = () => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get('/api/get_csrf_token/');
};
