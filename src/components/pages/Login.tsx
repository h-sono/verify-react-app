import React from 'react';
import { PostLogin } from '../callApi/PostLogin.tsx';
import { GetCsrfToken } from '../callApi/GetCsrfToken.tsx';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TODO } from '../const/RoutingPath.tsx';

export interface CsrfProps {
  token: string;
}

export interface LoginResProps {
  user_id?: number;
  user_name?: string;
  login_flg: boolean;
}

// TODO:未完成
export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [csrfToken, setCsrfToken] = React.useState<CsrfProps>({ token: '' });
  const [login, setLogin] = React.useState<LoginResProps>({ user_id: 0, user_name: '', login_flg: false });

  // CSRFトークン取得。API側の@csrf_protectで検証。
  React.useEffect(() => {
    GetCsrfToken().then((data: any) => {
      setCsrfToken(data);
    });
  }, []);

  const handleSubmit = () => {
    PostLogin(
      { username, password },
      {
        headers: {
          'X-CSRFToken': csrfToken.token,
          'Content-Type': 'application/json'
        }
      }
    ).then((data: any) => {
      setLogin(data);
    });
  };

  React.useEffect(() => {
    if (login.login_flg) {
      navigate(TODO);
    } else {
      navigate(LOGIN);
    }
  }, [login, navigate]);

  return (
    <div>
      <input type='text' placeholder='ユーザー名' value={username} onChange={e => setUsername(e.target.value)} />
      <input type='password' placeholder='パスワード' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>ログイン</button>
    </div>
  );
};
