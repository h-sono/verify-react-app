import React from 'react';
import { Link } from 'react-router-dom';
import { TODO, LOGIN, LOGOUT } from '../const/RoutingPath.tsx';
import { SessionStorageItemGet, SessionStorageUserInfoFormProps } from '../utils/SessionStorageUtils.tsx';
import { UserInfoForm } from '../const/Form.tsx';
import { LogoutButton } from '../atoms/LogoutButton.tsx';

export const Header: React.FC = () => {
  // セッションストレージのUserInfoFormから取得した値の状態管理。
  const [userInfoForm, setUserInfoForm] = React.useState<SessionStorageUserInfoFormProps>({
    user_id: 0,
    user_name: '',
    login_flg: false
  });

  React.useEffect(() => {
    const getFormData: SessionStorageUserInfoFormProps = SessionStorageItemGet(UserInfoForm);
    // セッションストレージの値を入力フォームにセット。
    if (getFormData) {
      setUserInfoForm({
        user_id: getFormData.user_id,
        user_name: getFormData.user_name,
        login_flg: getFormData.login_flg
      });
    }
  }, []);

  return (
    <header>
      <nav>
        <title style={{ fontSize: '30px' }}>Todoアプリ</title>
        <ul>
          <li>{userInfoForm.user_id > 0 ? `ユーザー: ${userInfoForm.user_name}` : '未ログイン'}</li>
          <li>
            <Link to={TODO}>トップページ</Link>
          </li>
          {userInfoForm.user_id >= 1 ? (
            ''
          ) : (
            <li>
              <Link to={LOGIN}>ログイン</Link>
            </li>
          )}
          {userInfoForm.user_id > 0 ? (
            <li>
              <LogoutButton />
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </header>
  );
};
