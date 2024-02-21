import React from 'react';
// import Cookies from 'js-cookie';
import { PostLogin } from '../callApi/PostLogin.tsx';
import { GetCsrfToken } from '../callApi/GetCsrfToken.tsx';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TODO } from '../const/RoutingPath.tsx';
import { UserInfoContext } from '../hook/CommonUseContext.tsx';

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
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();
  // ログインフォームで入力したユーザー名の状態管理。
  const [username, setUsername] = React.useState<string>('');
  // ログインフォームで入力したパスワードの状態管理。
  const [password, setPassword] = React.useState<string>('');
  // /api/get_csrf_token/から取得したCSRFトークンの状態管理。
  // const [csrfToken, setCsrfToken] = React.useState<CsrfProps>({ token: '' });
  // /api/login/から取得したログイン情報の状態管理。
  const [login, setLogin] = React.useState<LoginResProps>({ user_id: 0, user_name: '', login_flg: false });

  // CSRFトークン取得。API側の@csrf_protectで検証。
  // React.useEffect(() => {
  //   GetCsrfToken().then((data: any) => {
  //     setCsrfToken(data);
  //   });
  // }, []);
  React.useEffect(() => {
    GetCsrfToken();
  }, []);
  // console.log('csrfトークン----------------------------');
  // console.log(Cookies.get('csrftoken'));
  // console.log('csrfトークン----------------------------');
  // console.log('csrfトークン----------------------------');
  // console.log(csrfToken);
  // console.log('csrfトークン----------------------------');

  // ログインボタンを押下したときに/api/login/を呼び出して認証する。
  const handleSubmit = () => {
    PostLogin(
      { username, password },
      {
        headers: {
          // 'X-CSRFToken': csrfToken.token,
          // 'X-CSRFToken': Cookies.get('csrftoken'),
          'Content-Type': 'application/json'
        }
      }
    ).then((data: any) => {
      setLogin(data);
    });
  };

  // ログインフラグがTrueであればログイン成功。トップ画面に遷移する。
  React.useEffect(() => {
    if (login.login_flg) {
      navigate(TODO);
    } else {
      navigate(LOGIN);
    }
  }, [login, navigate]);

  return (
    // コンテキストにユーザー情報を格納する。
    <UserInfoContext.Provider
      value={{ user_id: login.user_id, user_name: login.user_name, login_flg: login.login_flg }}
    >
      <div>
        <input type='text' placeholder='ユーザー名' value={username} onChange={e => setUsername(e.target.value)} />
        <input type='password' placeholder='パスワード' value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>ログイン</button>
      </div>
    </UserInfoContext.Provider>
  );
};
