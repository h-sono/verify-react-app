import styled from 'styled-components';
import { Link } from 'react-router-dom';

// headerのスタイル。
export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  line-height: 60px;
  background: #4169e1;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 20px;
`;

// ヘッダーのロゴスタイル。
export const HeaderLogo = styled.div`
  padding: 0 20px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.2em;
`;

// 「トップページ」リンクのスタイル。
export const TopLink = styled(Link)`
  position: absolute;
  font-weight: bold;
  top: 5%;
  right: 30%;
  color: #000000;
  margin-right: 5%;
  text-decoration: none;
  &:hover {
    color: #696969;
  }
`;

// 「ログインユーザー」のスタイル。
export const UserDisplay = styled.div`
  position: absolute;
  font-weight: bold;
  top: 5%;
  right: 10%;
  margin-right: 3%;
`;

// ログインリンク、ログアウトボタンのスタイル。
export const LoginLogoutBlock = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
`;

// ログインリンク本体のスタイル。
export const LoginLink = styled(Link)`
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #696969;
  }
`;
