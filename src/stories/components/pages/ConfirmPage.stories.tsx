import React from 'react';
import { ConfirmPage } from '../../../components/pages/ConfirmPage.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../../../components/utils/SessionStorageUtils.tsx';
import { TodoForm, UserInfoForm } from '../../../components/const/Form.tsx';
import { New, Modify, Delete } from '../../../components/const/RegistrationType.tsx';

// 新規確認画面のセッションストレージ：TodoForm、UserInfoForm(ログイン中)の値。
const SessionStorageValue_1 = {
  TodoForm: {
    user_id: 1,
    todo_id: 0,
    todo: 'テストtodo1',
    date: '2024-02-01',
    applType: New
  },
  UserInfoForm: {
    user_id: 1,
    user_name: 'テストユーザー1',
    login_flg: true
  }
};

// 変更確認画面のセッションストレージ：TodoForm、UserInfoForm(ログイン中)の値。
const SessionStorageValue_2 = {
  TodoForm: {
    user_id: 1,
    todo_id: 1,
    todo: 'テストtodo2',
    date: '2024-02-01',
    applType: Modify
  },
  UserInfoForm: {
    user_id: 1,
    user_name: 'テストユーザー1',
    login_flg: true
  }
};

// 削除確認画面のセッションストレージ：TodoForm、UserInfoForm(ログイン中)の値。
const SessionStorageValue_3 = {
  TodoForm: {
    user_id: 1,
    todo_id: 1,
    todo: 'テストtodo3',
    date: '2024-02-01',
    applType: Delete
  },
  UserInfoForm: {
    user_id: 1,
    user_name: 'テストユーザー1',
    login_flg: true
  }
};

export default {
  title: 'ConfirmPage',
  component: ConfirmPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}
};

export const ConfirmPageNewUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoForm、UserInfoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_1.TodoForm);
  SessionStorageSet(UserInfoForm, SessionStorageValue_1.UserInfoForm);
  return <ConfirmPage />;
};

export const ConfirmPageModifyUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoForm、UserInfoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_2.TodoForm);
  SessionStorageSet(UserInfoForm, SessionStorageValue_2.UserInfoForm);
  return <ConfirmPage />;
};

export const ConfirmPageDeleteUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoForm、UserInfoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_3.TodoForm);
  SessionStorageSet(UserInfoForm, SessionStorageValue_3.UserInfoForm);
  return <ConfirmPage />;
};
