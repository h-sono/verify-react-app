import { Get } from './Get.tsx';

export interface GetTodoListProps {
  id: number;
  todo: string;
  appltype: string[];
  del_flg: boolean;
  update_date_time: string;
}

export interface GetTodoListResProps {
  todo_list: GetTodoListProps[];
}

export const getTodoList = (user_id?: number) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  // return Get(`http://localhost:8000/api/todo/${user_id}`);
  return Get(`/api/todo/${user_id}`);
};
