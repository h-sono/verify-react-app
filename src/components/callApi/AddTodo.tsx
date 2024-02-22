import { Post } from './Post.tsx';

export interface AddTodoProps {
  user_id: number;
  todo: string;
}

export interface AddTodoResProps {
  id?: number;
  error_flg: boolean;
}

export const AddTodo = (req: AddTodoProps, config: object) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post('/api/add_todo/', req, config);
};
