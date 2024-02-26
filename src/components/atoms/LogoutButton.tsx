import React from 'react';
import { GetLogout } from '../callApi/GetLogout.tsx';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../const/RoutingPath.tsx';
import { LogoutButtonDisplay } from '../style/LogoutButtonStyle.tsx';

export const LogoutButton: React.FC = () => {
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // ログアウトAPIを実行。
    GetLogout();
    // ログアウト後はログイン画面に遷移。
    navigate(LOGIN);
  };

  return <LogoutButtonDisplay onClick={handleButtonClick}>ログアウト</LogoutButtonDisplay>;
};
