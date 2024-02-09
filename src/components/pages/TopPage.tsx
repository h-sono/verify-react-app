import React from 'react';
import { TopPageView } from '../organisms/TopPageView.tsx';
import { SessionStorageAllClear } from '../utils/SessionStorageUtils.tsx';

// 一覧画面のロジックコンポーネント
export const TopPage: React.FC = () => {
  // TODO:一覧取得API呼び出し
  // TODO:一覧取得API呼び出したと仮定
  const test_list = [
    { todo: 'テストメモ1', date: '2024/2/7', button: ['M', 'D'] },
    { todo: 'テストメモ2', date: '2024/2/1', button: ['M'] },
    { todo: 'テストメモ3', date: '2024/2/2', button: [] }
  ];
  // セッションストレージをクリアする
  SessionStorageAllClear();
  return <TopPageView tableList={test_list} />;
};
