import { Post } from './Post.tsx';

export interface LoginProps {
  username: string;
  password: string;
}

export const PostLogin = (req: LoginProps, config: any) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post('/api/todo/login/', req, config);
};
