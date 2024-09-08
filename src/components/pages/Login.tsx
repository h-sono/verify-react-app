import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN, TODO } from '../const/RoutingPath';
import { LoginResProps } from '../callApi/PostLogin';
import { GetLogout } from '../callApi/GetLogout';
import { LoginContainer, LoginInput, LoginButton, LoginFailMsg } from '../style/LoginStyle';
import { E00001 } from '../const/Code';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store/UserInfoSlice';
import { HeaderProps } from '../const/HeaderInfo';
import { callPostLogin } from '../callApi/callApiPromise/CallPostLogin';
import Cookies from 'js-cookie';

// ログイン画面のコンポーネント。
export const Login: React.FC = () => {
  // reduxストアへの値のディスパッチ。
  const dispatch = useDispatch();

  // TODO: reduxストアの値の消去処理

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

  // 古いCSRFトークンが残っていた場合を考慮し、ログイン画面を開いたときにCookiesから削除。
  React.useEffect(() => {
    Cookies.remove('todoapp-csrftoken');
  }, []);

  // ログインボタンを押下したときに/api/login/を呼び出して認証する。
  const handleSubmit = () => {
    // ログインAPI呼び出し。
    callPostLogin(username, password, {
      headers: {
        // POST時にCSRFトークン検証をするためヘッダーで送信。
        'X-CSRFToken': Cookies.get('todoapp-csrftoken'),
        'Content-Type': 'application/json'
      } as HeaderProps
    }).then(data => {
      // 返却値。
      const resData = data as LoginResProps;

      if (resData.login_flg) {
        // ユーザー情報を管理するストアにPostLoginで取得したユーザー情報を保存。
        dispatch(
          setUserInfo({
            user_id: resData.user_id,
            user_name: resData.user_name,
            login_flg: resData.login_flg
          })
        );

        // 返却値をセット。
        setLogin(resData);

        // トップページに遷移。
        navigate(TODO);
      } else {
        // ログイン画面にとどまる。
        navigate(LOGIN);
      }
    });
  };

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
