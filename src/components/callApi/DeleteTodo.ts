import { Post } from './Post';

export interface DeleteTodoProps {
  todo_id: number;
  user_id: number;
}

export interface DeleteTodoResProps {
  id: number;
  error_flg: boolean;
}

// Todo削除API。
export const DeleteTodo = (req: DeleteTodoProps, config: object) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post<DeleteTodoProps, DeleteTodoResProps>('/api/delete_todo/', req, config);
};
