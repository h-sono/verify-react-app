import React from 'react';
import { TopPageView } from '../organisms/TopPageView.tsx';
import { SessionStorageAllClear } from '../utils/SessionStorageUtils.tsx';
import { getTodoList } from '../callApi/GetTodoList.tsx';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  // TODO:一覧取得API呼び出し
  // TODO:一覧取得API呼び出したと仮定
  const test_list = [
    { todo: 'テストメモ1', date: '2024/2/7', button: ['M', 'D'] },
    { todo: 'テストメモ2', date: '2024/2/1', button: ['M'] },
    { todo: 'テストメモ3', date: '2024/2/2', button: [] }
  ];
  const [ resData, setResData ] = React.useState<object>({});
  React.useEffect(() => {
    // view_test.py呼び出し
    setResData(getTodoList());
  }, []);
  console.log('API返却値1---------------------')
  console.log(resData)
  console.log('API返却値1---------------------')
  // セッションストレージをクリアする
  SessionStorageAllClear();
  return <TopPageView tableList={test_list} />;
};
