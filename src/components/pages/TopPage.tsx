import React from 'react';
import { TopTable } from '../organisms/TopTable.tsx';

export const TopPage: React.FC = () => {
  return <TopTable memo='テストメモ' date='2024/1/22' button='テストボタン' />;
};
