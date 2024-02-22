import React, { useContext } from 'react';
import { PostLogin } from '../callApi/PostLogin.tsx';
import { GetCsrfToken } from '../callApi/GetCsrfToken.tsx';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TODO } from '../const/RoutingPath.tsx';
import { UserInfoContext } from '../hook/CommonUseContext.tsx';
import { LoginResProps } from '../callApi/PostLogin.tsx';
import { GetLogout, LogoutResProps } from '../callApi/GetLogout.tsx';

export const Login: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();
  // ユーザー情報を格納しているコンテキストの呼び出し。
  const UseUserContext = useContext(UserInfoContext);
  // ログインフォームで入力したユーザー名の状態管理。
  const [username, setUsername] = React.useState<string>('');
  // ログインフォームで入力したパスワードの状態管理。
  const [password, setPassword] = React.useState<string>('');
  // /api/todo/login/から取得したログイン情報の状態管理。
  const [login, setLogin] = React.useState<LoginResProps>({ user_id: 0, user_name: '', login_flg: false });
  // /api/todo/login/から取得した情報の状態管理。
  const [logout, setLogout] = React.useState<LogoutResProps>({ logout_flg: false });

  // user_idが1以上であった場合、ログインが完了しているのでログイン画面を開こうとしたときに
  // トップ画面に遷移するようにしている。ログインしなおしたければ一度ログアウトする。
  React.useEffect(() => {
    if (UseUserContext.user_id !== undefined) {
      if (UseUserContext.user_id > 0) {
        navigate(TODO);
      }
    }
  }, [UseUserContext]);

  // ログイン画面のURLを直接指定された場合などにセッションを終了するよう
  // ログアウトAPIを呼び出す(cookieのセッションIDが削除される=セッションが終了する)。
  React.useEffect(() => {
    GetLogout().then((data: any) => {
      setLogout(data);
    });
  }, []);

  // CSRFトークン取得(cookieにセットされるのでリクエストヘッダに含める必要はない)。
  // API側の@csrf_protectで検証。
  React.useEffect(() => {
    if (logout) {
      GetCsrfToken();
    }
  }, [logout]);

  // ログインボタンを押下したときに/api/login/を呼び出して認証する。
  const handleSubmit = () => {
    PostLogin(
      { username, password },
      {
        headers: {
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
