import { Post } from './Post.tsx';

export interface DeleteTodoProps {
  todo_id: number;
  user_id: number;
}

export interface DeleteTodoResProps {
  id?: number;
  error_flg: boolean;
}

export const DeleteTodo = (req: DeleteTodoProps, config: object) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post('/api/delete_todo/', req, config);
};
