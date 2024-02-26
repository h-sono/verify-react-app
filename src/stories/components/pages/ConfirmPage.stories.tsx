import React from 'react';
import { ConfirmPage } from '../../../components/pages/ConfirmPage.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../../../components/utils/SessionStorageUtils.tsx';
import { TodoForm } from '../../../components/const/Form.tsx';
import { New, Modify, Delete } from '../../../components/const/RegistrationType.tsx';

// 新規確認画面のセッションストレージ：TodoFormの値。
const SessionStorageValue_1 = {
  TodoForm: {
    user_id: 1,
    todo_id: 0,
    todo: 'テストtodo1',
    date: '2024-02-01',
    applType: New
  }
};

// 変更確認画面のセッションストレージ：TodoFormの値。
const SessionStorageValue_2 = {
  TodoForm: {
    user_id: 1,
    todo_id: 1,
    todo: 'テストtodo2',
    date: '2024-02-01',
    applType: Modify
  }
};

// 削除確認画面のセッションストレージ：TodoFormの値。
const SessionStorageValue_3 = {
  TodoForm: {
    user_id: 1,
    todo_id: 1,
    todo: 'テストtodo3',
    date: '2024-02-01',
    applType: Delete
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
  // セッションストレージ：TodoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_1.TodoForm);
  return <ConfirmPage />;
};

export const ConfirmPageModifyUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_2.TodoForm);
  return <ConfirmPage />;
};

export const ConfirmPageDeleteUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_3.TodoForm);
  return <ConfirmPage />;
};
