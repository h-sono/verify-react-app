import React from 'react';
import { TODO, LOGIN } from '../const/RoutingPath.tsx';
import { SessionStorageItemGet, SessionStorageUserInfoFormProps } from '../utils/SessionStorageUtils.tsx';
import { UserInfoForm } from '../const/Form.tsx';
import { LogoutButton } from '../atoms/LogoutButton.tsx';
import {
  HeaderContainer,
  HeaderLogo,
  UserDisplay,
  TopLink,
  LoginLogoutBlock,
  LoginLink
} from '../style/HeaderStyle.tsx';

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
    <HeaderContainer>
      <HeaderLogo>Todoアプリ</HeaderLogo>
      {userInfoForm.user_id >= 1 ? <TopLink to={TODO}>トップページ</TopLink> : ''}
      <UserDisplay>{userInfoForm.user_id > 0 ? `ログインユーザー: ${userInfoForm.user_name}` : ''}</UserDisplay>
      {userInfoForm.user_id >= 1 ? (
        <LoginLogoutBlock>
          <LogoutButton />
        </LoginLogoutBlock>
      ) : (
        <LoginLogoutBlock>
          <LoginLink to={LOGIN}>ログイン</LoginLink>
        </LoginLogoutBlock>
      )}
    </HeaderContainer>
  );
};
