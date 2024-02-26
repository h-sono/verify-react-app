import React from 'react';
import { InputPage } from '../../../components/pages/InputPage.tsx';
import { SessionStorageSet, SessionStorageAllClear } from '../../../components/utils/SessionStorageUtils.tsx';
import { TodoForm } from '../../../components/const/Form.tsx';
import { New, Modify } from '../../../components/const/RegistrationType.tsx';

// 新規入力画面のセッションストレージ：TodoFormの値。
const SessionStorageValue_1 = {
  TodoForm: {
    user_id: 1,
    todo_id: 0,
    todo: '',
    date: '2024-02-01',
    applType: New
  }
};

// 変更入力画面のセッションストレージ：TodoFormの値。
const SessionStorageValue_2 = {
  TodoForm: {
    user_id: 1,
    todo_id: 1,
    todo: 'テストtodo1',
    date: '2024-02-01',
    applType: Modify
  }
};

export default {
  title: 'InputPage',
  component: InputPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}
};

export const InputPageNewUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_1.TodoForm);
  return <InputPage />;
};

export const InputPageModifyUi = () => {
  // セッションストレージをオールクリア。
  SessionStorageAllClear();
  // セッションストレージ：TodoFormの値をセット。
  SessionStorageSet(TodoForm, SessionStorageValue_2.TodoForm);
  return <InputPage />;
};
