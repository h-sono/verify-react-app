import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TopPage } from '../../../components/pages/TopPage.tsx';
import { UserInfoContext } from '../../../components/hook/CommonUseContext.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../../../components/utils/SessionStorageUtils.tsx';
import { UserInfoForm } from '../../../components/const/Form.tsx';

const mockAxios = new MockAdapter(axios);

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

// /api/todo/{user_id}の返却値モック。
mockAxios.onGet('/api/todo/1').reply(200, {
  todo_list: [
    {
      id: 1,
      todo: 'テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1テストtodo1',
      appltype: ['M', 'D'],
      del_flg: false,
      update_date_time: '2024-02-01'
    },
    {
      id: 2,
      todo: 'テストtodo2',
      appltype: ['M', 'D'],
      del_flg: false,
      update_date_time: '2024-02-01'
    },
    {
      id: 3,
      todo: 'テストtodo3',
      appltype: ['M', 'D'],
      del_flg: false,
      update_date_time: '2024-02-01'
    }
  ]
});

export default {
  title: 'TopPage',
  component: TopPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <UserInfoContext.Provider value={SessionStorageValue_1.UserInfoForm}>
        <Story />
      </UserInfoContext.Provider>
    )
  ]
};

// ログインしたときのUI。
export const TopPageLoginUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // ログインしたときのセッションストレージ：UserInfoFormの値をセット。
  SessionStorageSet(UserInfoForm, SessionStorageValue_1.UserInfoForm);
  return <TopPage />;
};

// ログアウトしたときのUI。
export const TopPageLogoutUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // ログアウトしたときのセッションストレージ：UserInfoFormの値をセット。
  SessionStorageSet(UserInfoForm, SessionStorageValue_2.UserInfoForm);
  return <TopPage />;
};
