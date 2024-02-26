import React from 'react';
import { Header } from '../../../components/atoms/Header.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../../../components/utils/SessionStorageUtils.tsx';
import { UserInfoForm } from '../../../components/const/Form.tsx';

// ログインしたときのセッションストレージ：UserInfoFormの値。
const SessionStorageValue_1 = {
  UserInfoForm: {
    user_id: 1,
    user_name: 'テストユーザー1',
    login_flg: true
  }
};

// ログアウトしたときのセッションストレージ：UserInfoFormの値。
const SessionStorageValue_2 = {
  UserInfoForm: {
    user_id: 0,
    user_name: '',
    login_flg: false
  }
};

export default {
  title: 'Header',
  component: Header,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}
};

export const HeaderLoginUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // ログインしたときのセッションストレージ：UserInfoFormの値をセット。
  SessionStorageSet(UserInfoForm, SessionStorageValue_1.UserInfoForm);
  return <Header />;
};

export const HeaderLogoutUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // ログアウトしたときのセッションストレージ：UserInfoFormの値をセット。
  SessionStorageSet(UserInfoForm, SessionStorageValue_2.UserInfoForm);
  return <Header />;
};
