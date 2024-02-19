import { Get } from './Get.tsx';

export interface GetTodoListResProps {
  id: number;
  todo: string;
  appltype: string[];
  del_flg: boolean;
  update_date_time: string;
}

export const getTodoList = (user_id?: number) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Get(`/api/todo/${user_id}`);
};
