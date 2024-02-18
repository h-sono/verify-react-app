import { Get } from './Get.tsx';

export const getTodoList = (user_id: string) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get(`/api/todo/${user_id}`);
};
