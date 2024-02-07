import React from 'react';
import { TopTable } from '../organisms/TopTable.tsx';

export const TopPage: React.FC = () => {
  // TODO:一覧取得API呼び出し
  // TODO:一覧取得API呼び出したと仮定
  const test_list = [
    {memo: 'テストメモ1', date: '2024/2/7', button: ['M', 'D']},
    {memo: 'テストメモ2', date: '2024/2/1', button: ['M']},
    {memo: 'テストメモ3', date: '2024/2/2', button: []}
  ]
  return <TopTable tableList={test_list} />;
};
