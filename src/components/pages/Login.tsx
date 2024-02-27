import React from 'react';
import Cookies from 'js-cookie';
import { PostLogin } from '../callApi/PostLogin.tsx';
import { GetCsrfToken } from '../callApi/GetCsrfToken.tsx';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TODO } from '../const/RoutingPath.tsx';
import { LoginResProps } from '../callApi/PostLogin.tsx';
import { GetLogout } from '../callApi/GetLogout.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../utils/SessionStorageUtils.tsx';
import { UserInfoForm } from '../const/Form.tsx';
import { LoginContainer, LoginInput, LoginButton, LoginFailMsg } from '../style/LoginStyle.tsx';
import { E00001 } from '../const/Code.tsx';

export const Login: React.FC = () => {
  // ログイン画面でセッションストレージを全てクリアする(/api/todo/logout/を呼び出した時点でクリアされるが念のため)。
  SessionStorageAllClear();

  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  // ログインフォームで入力したユーザー名の状態管理。
  const [username, setUsername] = React.useState<string>('');
  // ログインフォームで入力したパスワードの状態管理。
  const [password, setPassword] = React.useState<string>('');
  // /api/todo/login/から取得したログイン情報の状態管理。
  const [login, setLogin] = React.useState<LoginResProps>({ user_id: 0, user_name: '', login_flg: false, code: '' });

  // ログイン画面のURLを直接指定された場合などにセッションを終了するよう
  // ログアウトAPIを呼び出す(cookieのセッションIDが削除される=セッションが終了する)。
  React.useEffect(() => {
    GetLogout();
  }, []);

  // CSRFトークン取得(cookieにセットされるのでリクエストヘッダに含める必要はない)。
  // API側の@csrf_protectで検証。
  React.useEffect(() => {
    GetCsrfToken();
  }, []);

  // ログインボタンを押下したときに/api/login/を呼び出して認証する。
  const handleSubmit = () => {
    PostLogin(
      { username, password },
      {
        headers: {
          // POST時にCSRFトークン検証をするためヘッダーで送信。
          'X-CSRFToken': Cookies.get('csrftoken'),
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
      // セッションストレージにPostLoginで取得したユーザー情報を保存。
      SessionStorageSet(UserInfoForm, {
        user_id: login.user_id,
        user_name: login.user_name,
        login_flg: login.login_flg
      });
      // トップページに遷移。
      navigate(TODO);
    } else {
      navigate(LOGIN);
    }
  }, [login, navigate]);

  return (
    <LoginContainer>
      <LoginInput type='text' placeholder='ユーザー名' value={username} onChange={e => setUsername(e.target.value)} />
      <LoginInput
        type='password'
        placeholder='パスワード'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleSubmit}>ログイン</LoginButton>
      {login.code === E00001 ? <LoginFailMsg>ユーザー名またはパスワードが違います。</LoginFailMsg> : ''}
    </LoginContainer>
  );
};
