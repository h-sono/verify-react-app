import React from 'react';
import { TODO, LOGIN } from '../const/RoutingPath';
import { LogoutButton } from '../atoms/LogoutButton';
import { HeaderContainer, HeaderLogo, UserDisplay, TopLink, LoginLogoutBlock, LoginLink } from '../style/HeaderStyle';
import { selectUserInfo } from '../../store/UserInfoSlice';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  // reduxストアから値を取得。
  const userInfo = useSelector(selectUserInfo);

  return (
    <HeaderContainer>
      <HeaderLogo>Todoアプリ</HeaderLogo>
      {userInfo && userInfo.user_id >= 1 ? <TopLink to={TODO}>トップページ</TopLink> : ''}
      <UserDisplay>{userInfo && userInfo.user_id > 0 ? `ログインユーザー: ${userInfo.user_name}` : ''}</UserDisplay>
      {userInfo && userInfo.user_id >= 1 ? (
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
