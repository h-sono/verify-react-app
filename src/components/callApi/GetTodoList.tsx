import { Get } from './get.tsx';

export const getTodoList = () => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get('/api/todo/');
};
