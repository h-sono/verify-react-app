import { Post } from './Post.tsx';

export interface UpdateTodoProps {
  todo_id: number;
  user_id: number;
  todo: string;
}

export interface UpdateTodoResProps {
  id?: number;
  error_flg: boolean;
}

export const UpdateTodo = (req: UpdateTodoProps, config: object) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post('/api/update_todo/', req, config);
  // return Post('http:/localhost:8000/api/update_todo/', req, config);
};
