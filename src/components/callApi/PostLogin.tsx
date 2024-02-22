import { Post } from './Post.tsx';

export interface LoginProps {
  username: string;
  password: string;
}

export interface LoginResProps {
  user_id?: number;
  user_name?: string;
  login_flg: boolean;
}

export const PostLogin = (req: LoginProps, config: any) => {
  // Nginxのlocation /api からDjangoの8000番ポートに転送する設定のためオリジンの指定は不要。
  return Post('/api/todo/login/', req, config);
};
